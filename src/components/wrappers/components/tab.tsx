"use client";

import { type TabProps as MuiTabProps, Tab as MuiTab } from "@mui/material";
import { useMemo } from "react";
import { useTabs } from "../hooks/tabs.js";

type TabProps = MuiTabProps & {
  selected: boolean;
};

function Tab({ value: valueProp, children, selected: selectedProp, ...props }: TabProps) {
  const tabs = useTabs();
  const selected = useMemo(
    () => selectedProp ?? valueProp === tabs?.value,
    [selectedProp, tabs?.value]
  );

  function handleClick() {
    if (tabs !== null) tabs.setValue(valueProp);
  }

  return (
    <MuiTab
      value={valueProp}
      onClick={handleClick}
      // @ts-expect-error selected is valid but is not included in Tab props
      selected={selected}
      {...props}>
      {children}
    </MuiTab>
  );
}

export type { TabProps };

export { Tab };
