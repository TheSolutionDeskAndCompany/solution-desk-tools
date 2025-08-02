// Stripe Configuration
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
// TODO: Replace with your actual Stripe publishable key
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo_key_replace_with_real_key'
);

// Stripe Product IDs and Price IDs
// TODO: Replace with your actual Stripe product/price IDs
export const STRIPE_CONFIG = {
  PRODUCTS: {
    PRO_MONTHLY: {
      priceId: process.env.REACT_APP_STRIPE_PRO_MONTHLY_PRICE_ID || 'price_demo_monthly',
      amount: 29.00,
      currency: 'usd',
      interval: 'month'
    },
    PRO_YEARLY: {
      priceId: process.env.REACT_APP_STRIPE_PRO_YEARLY_PRICE_ID || 'price_demo_yearly',
      amount: 290.00,
      currency: 'usd',
      interval: 'year'
    }
  },
  SUCCESS_URL: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
  CANCEL_URL: `${window.location.origin}/upgrade`
};

export default stripePromise;
