import React from "react";

const colours = [
  { label: "Background", token: "--kn-color-background", value: "#F7F6F3" },
  { label: "Primary text", token: "--kn-color-text", value: "#111111" },
  { label: "Accent", token: "--kn-color-accent", value: "#8B0000" },
  { label: "Success", token: "--kn-color-success", value: "Muted green" },
  { label: "Warning", token: "--kn-color-warning", value: "Muted amber" }
];

const spacingScale = ["8px", "16px", "24px", "40px", "64px"];

export const PrimaryWorkspace: React.FC = () => {
  return (
    <div className="kn-card kn-layout-card">
      <div className="kn-card-header">
        <h2 className="kn-card-title">Layout &amp; Structure</h2>
        <p className="kn-card-subtitle">
          Preview how the top bar, context header, workspace, and proof footer
          align into a single, readable frame.
        </p>
      </div>

      <div className="kn-layout-grid">
        <div className="kn-layout-column">
          <section className="kn-layout-section">
            <h3 className="kn-layout-section-title">Colour system</h3>
            <p className="kn-layout-section-help">
              Keep this palette tight. Each colour has a clear, single
              responsibility.
            </p>
            <div className="kn-color-list">
              {colours.map((colour) => (
                <div key={colour.label} className="kn-color-row">
                  <div
                    className={`kn-color-swatch kn-color-swatch--${colour.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  />
                  <div className="kn-color-meta">
                    <span className="kn-color-label">{colour.label}</span>
                    <span className="kn-color-token">{colour.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="kn-layout-section">
            <h3 className="kn-layout-section-title">Buttons</h3>
            <p className="kn-layout-section-help">
              Primary is for the single next step. Secondary and tertiary stay
              available but quiet.
            </p>
            <div className="kn-row">
              <button className="kn-button kn-button--primary">
                Primary action
              </button>
              <button className="kn-button kn-button--secondary">
                Secondary action
              </button>
              <button className="kn-button kn-button--ghost">Tertiary</button>
            </div>
          </section>
        </div>

        <div className="kn-layout-column">
          <section className="kn-layout-section">
            <h3 className="kn-layout-section-title">Spacing scale</h3>
            <p className="kn-layout-section-help">
              Only use these values. They keep density and rhythm consistent.
            </p>
            <ul className="kn-list">
              {spacingScale.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="kn-layout-section">
            <h3 className="kn-layout-section-title">Inputs</h3>
            <p className="kn-layout-section-help">
              Labels stay clear. Placeholders describe intent, not instructions.
            </p>
            <label className="kn-input-group">
              <span className="kn-input-label">Label</span>
              <input
                className="kn-input"
                placeholder="Clear, descriptive microcopy lives here."
                readOnly
              />
            </label>
          </section>
        </div>
      </div>
    </div>
  );
};

