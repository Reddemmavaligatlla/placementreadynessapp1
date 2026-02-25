import React from "react";

type Status = "Not Started" | "In Progress" | "Shipped";

interface TopBarProps {
  projectName: string;
  step: number;
  totalSteps: number;
  status: Status;
}

export const TopBar: React.FC<TopBarProps> = ({
  projectName,
  step,
  totalSteps,
  status
}) => {
  return (
    <header className="kn-topbar">
      <div className="kn-topbar-left">{projectName}</div>
      <div className="kn-topbar-center">
        Step {step} / {totalSteps}
      </div>
      <div className="kn-topbar-right">
        <span className="kn-badge kn-badge--status">{status}</span>
      </div>
    </header>
  );
};

