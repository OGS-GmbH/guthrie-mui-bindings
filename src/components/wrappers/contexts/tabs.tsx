"use client";

import { createContext } from "react";
import { type TabsContextValue } from "../types/tabs.js";

const TabsContext = createContext<TabsContextValue | null>(null);

export { TabsContext };
