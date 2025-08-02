import React from "react";
import SharedLayout from "./SharedLayout";

export default function HeroSection() {
  return (
    <SharedLayout
      title="The Solution Desk"
      subtitle="Professional Business Process Improvement Tools"
      description="Empowering teams and small businesses with smart, data-driven tools for real business results."
      showActions={true}
      showTrust={true}
      isHeroMode={true}
    />
  );
}
