import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to Spend and Save Smartly</h1>
      <p>Your Personalized Path to Financial Well-being</p>
      <button onClick={() => navigate("/onboarding")}>Get Started</button>
    </div>
  );
}

export default LandingPage;