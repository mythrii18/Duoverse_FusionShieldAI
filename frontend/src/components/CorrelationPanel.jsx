import React from "react";

export default function CorrelationPanel({ result }) {

  if (!result) return <div className="glass card">No correlation</div>;

  return (
    <div className="glass card">

      <h3>Correlation</h3>

      <div className="alert">⚠ Coordinated Attack</div>

      <div className="badge email">Email</div>
      <div className="badge sms">SMS</div>
      <div className="badge voice">Voice</div>

      <p>Signals overlap detected</p>

      <div className="fusion">Fusion Boost +18%</div>

    </div>
  );
}