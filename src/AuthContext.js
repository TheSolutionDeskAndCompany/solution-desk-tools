import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from './config/firebase';
import { STRIPE_CONFIG } from './config/stripe';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPaidAccess, setHasPaidAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Firebase Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        setUser(firebaseUser);
        setIsAuthenticated(true);
        
        // Get user profile from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const profile = userDoc.data();
            setUserProfile(profile);
            setHasPaidAccess(profile.subscription === 'pro' && profile.subscriptionActive);
          } else {
            // Create new user profile
            const newProfile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0],
              subscription: 'free',
              subscriptionActive: false,
              createdAt: new Date().toISOString(),
              lastLogin: new Date().toISOString()
            };
            await setDoc(doc(db, 'users', firebaseUser.uid), newProfile);
            setUserProfile(newProfile);
            setHasPaidAccess(false);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setHasPaidAccess(false);
        }
      } else {
        // User is signed out
        setUser(null);
        setIsAuthenticated(false);
        setHasPaidAccess(false);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email/Password Login
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login
      await updateDoc(doc(db, 'users', result.user.uid), {
        lastLogin: new Date().toISOString()
      });
      
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: getErrorMessage(error.code) };
    }
  };

  // Email/Password Signup
  const signup = async (email, password, displayName) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update display name
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }
      
      // Create user profile in Firestore
      const userProfile = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: displayName || email.split('@')[0],
        subscription: 'free',
        subscriptionActive: false,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'users', result.user.uid), userProfile);
      
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: getErrorMessage(error.code) };
    }
  };

  // Google Sign In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Google sign in error:', error);
      return { success: false, error: getErrorMessage(error.code) };
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  };

  // Stripe Checkout
  const createCheckoutSession = async (priceId) => {
    try {
      if (!user) {
        throw new Error('User must be logged in to purchase');
      }

      // In a real app, you'd call your backend to create the checkout session
      // For demo purposes, we'll simulate this
      const checkoutSession = {
        id: 'cs_demo_' + Date.now(),
        url: `https://checkout.stripe.com/demo?price=${priceId}&customer=${user.uid}`
      };
      
      // Redirect to Stripe Checkout
      window.location.href = checkoutSession.url;
      
      return { success: true, sessionId: checkoutSession.id };
    } catch (error) {
      console.error('Checkout error:', error);
      return { success: false, error: error.message };
    }
  };

  // Update user subscription status (called after successful payment)
  const upgradeToPremium = async (subscriptionData = {}) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const updatedProfile = {
        subscription: 'pro',
        subscriptionActive: true,
        stripeCustomerId: subscriptionData.customerId,
        stripeSubscriptionId: subscriptionData.subscriptionId,
        subscriptionUpdatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'users', user.uid), updatedProfile);
      
      setUserProfile(prev => ({ ...prev, ...updatedProfile }));
      setHasPaidAccess(true);
      
      return { success: true };
    } catch (error) {
      console.error('Upgrade error:', error);
      return { success: false, error: error.message };
    }
  };

  // Helper function for error messages
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/popup-closed-by-user':
        return 'Sign-in popup was closed before completion.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const value = {
    user,
    userProfile,
    isAuthenticated,
    hasPaidAccess,
    loading,
    login,
    signup,
    signInWithGoogle,
    logout,
    createCheckoutSession,
    upgradeToPremium,
    STRIPE_CONFIG
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
