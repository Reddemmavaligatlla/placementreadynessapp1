import React from "react";

const items = [
  { id: "ui", label: "UI Built" },
  { id: "logic", label: "Logic Working" },
  { id: "tests", label: "Test Passed" },
  { id: "deploy", label: "Deployed" }
] as const;

export const ProofFooter: React.FC = () => {
  return (
    <footer className="kn-proof-footer">
      <div className="kn-proof-inner">
        {items.map((item) => (
          <div key={item.id} className="kn-proof-item">
            <label className="kn-proof-label">
              <span className="kn-checkbox" aria-hidden="true" />
              <span>{item.label}</span>
            </label>
            <input
              className="kn-input kn-proof-input"
              placeholder="Add proof or link"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

