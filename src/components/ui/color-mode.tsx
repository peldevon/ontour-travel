"use client";

import type { ReactNode } from "react";

export interface ColorModeProviderProps {
  children?: ReactNode;
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  return <>{children}</>;
}