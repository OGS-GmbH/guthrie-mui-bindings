"use client"

import { type TabProps as MuiTabProps, Tab as MuiTab } from "@mui/material";
import { useTabs } from "../hooks/tabs.js";
import { useMemo } from "react";

type TabProps = MuiTabProps & {
  selected: boolean
};

function Tab({
  value: valueProp,
  children,
  selected: selectedProp,
  ...props
}: TabProps) {
  const tabs = useTabs();
  const selected = useMemo(() => selectedProp ?? valueProp === tabs?.value, [selectedProp, tabs?.value]);

  function handleClick() {
    if (tabs !== null)
      tabs.setValue(valueProp);

  }

  return (
    <MuiTab
      value={valueProp}
      onClick={handleClick}
      selected={selected}
      {...props}
    >
      {children}
    </MuiTab>
  )
}

export type {
  TabProps
}

export {
  Tab
}

