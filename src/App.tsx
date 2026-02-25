import React from "react";
import { TopBar } from "./components/TopBar";
import { ContextHeader } from "./components/ContextHeader";
import { PrimaryWorkspace } from "./components/PrimaryWorkspace";
import { SecondaryPanel } from "./components/SecondaryPanel";
import { ProofFooter } from "./components/ProofFooter";

export const App: React.FC = () => {
  return (
    <div className="kn-app">
      <TopBar
        projectName="KodNest Premium Build System"
        step={1}
        totalSteps={4}
        status="Not Started"
      />

      <main className="kn-main">
        <ContextHeader
          title="Define the foundation of your build system."
          subtitle="Establish a calm, coherent interface language that keeps every build predictable and production-ready."
        />

        <section className="kn-workspace">
          <div className="kn-workspace-primary">
            <PrimaryWorkspace />
          </div>
          <aside className="kn-workspace-secondary">
            <SecondaryPanel />
          </aside>
        </section>
      </main>

      <ProofFooter />
    </div>
  );
};
