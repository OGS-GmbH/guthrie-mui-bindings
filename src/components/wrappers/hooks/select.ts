"use client";

import { useContext } from "react";
import { SelectContext } from "../contexts/select.js";

function useSelect() {
  return useContext(SelectContext);
}

export { useSelect };
