import React from "react";

const basePrompt = `Implement the KodNest Premium Build System frame:
- Top bar with product name, progress, and status badge.
- Context header with large serif headline and one-line purpose.
- Primary workspace (70%) with calm cards and predictable components.
- Secondary panel (30%) with step explanation, prompt box, and action buttons.
- Proof footer with four checkboxes that each collect user proof.

Respect the design rules:
- Off-white background, deep red primary, muted supporting tones.
- Serif headings, sans-serif body, generous spacing, max 720px text width.
- Spacing tokens only: 8 / 16 / 24 / 40 / 64.
- Subtle borders, no heavy shadows, no gradients or neon.
- 150–200ms ease-in-out transitions, clear error and empty states.`;

export const SecondaryPanel: React.FC = () => {
  return (
    <aside className="kn-secondary-panel">
      <section className="kn-card">
        <div className="kn-card-header">
          <h2 className="kn-card-title">Step context</h2>
          <p className="kn-card-subtitle">
            Keep this frame steady. Every future feature will sit inside this
            layout.
          </p>
        </div>
        <ul className="kn-list">
          <li>Use the defined spacing and text rules.</li>
          <li>Keep messaging direct, specific, and free of hype.</li>
          <li>Avoid decorative choices that don&apos;t clarify intent.</li>
        </ul>
      </section>

      <section className="kn-card">
        <div className="kn-card-header">
          <h2 className="kn-card-title">Prompt for builders</h2>
          <p className="kn-card-subtitle">
            Share this when asking another system to reproduce this layout.
          </p>
        </div>
        <textarea
          className="kn-textarea"
          value={basePrompt}
          readOnly
        />
        <div className="kn-secondary-panel-actions">
          <button className="kn-button kn-button--primary">Copy</button>
          <button className="kn-button kn-button--secondary">
            Build in Lovable
          </button>
          <button className="kn-button kn-button--secondary">It Worked</button>
          <button className="kn-button kn-button--secondary">Error</button>
          <button className="kn-button kn-button--secondary">
            Add Screenshot
          </button>
        </div>
      </section>
    </aside>
  );
};

