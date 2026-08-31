"use client";

import { Tabs as MuiTabs, type TabsProps as MuiTabsProps } from "@mui/material";
import { useMemo, useState } from "react";
import { TabsContext } from "../contexts/tabs.js";

type TabsProps = MuiTabsProps;

function Tabs({ children, value: valueProp, ...props }: TabsProps) {
  const [value, setValue] = useState(() => valueProp);
  const context = useMemo(
    () => ({
      value,
      setValue
    }),
    [value]
  );

  return (
    <TabsContext.Provider value={context}>
      <MuiTabs value={value} {...props}>
        {children}
      </MuiTabs>
    </TabsContext.Provider>
  );
}

export { Tabs };
