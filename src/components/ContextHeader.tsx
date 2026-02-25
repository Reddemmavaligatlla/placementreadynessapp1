import React from "react";

interface ContextHeaderProps {
  title: string;
  subtitle: string;
}

export const ContextHeader: React.FC<ContextHeaderProps> = ({
  title,
  subtitle
}) => {
  return (
    <section className="kn-context-header">
      <h1 className="kn-context-title">{title}</h1>
      <p className="kn-context-subtitle">{subtitle}</p>
    </section>
  );
};

