"use client"

import { useContext } from "react";
import { TabsContext } from "../contexts/tabs.js";

function useTabs() {
  return useContext(TabsContext);
}

export {
  useTabs
}

