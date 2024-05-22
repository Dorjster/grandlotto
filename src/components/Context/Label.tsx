"use client";
// context/LabelContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type LabelContextType = {
  label: string | null;
  setLabel: (newLabel: string) => void;
};

const LabelContext = createContext<LabelContextType | undefined>(undefined);

export const LabelProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [label, setLabel] = useState<string | null>(null);

  const handleSetLabel = (newLabel: string) => {
    setLabel(newLabel);
  };

  return (
    <LabelContext.Provider value={{ label, setLabel: handleSetLabel }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabelData = () => {
  const context = useContext(LabelContext);
  if (context === undefined) {
    throw new Error("useLabelData must be used within a LabelProvider");
  }
  return context;
};
