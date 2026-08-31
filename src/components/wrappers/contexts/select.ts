"use client";

import { createContext } from "react";
import { type SelectContextValue } from "../types/select.js";

const SelectContext = createContext<SelectContextValue | null>(null);

export { SelectContext };
