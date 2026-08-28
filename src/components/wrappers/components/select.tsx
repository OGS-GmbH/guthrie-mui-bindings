"use client"

import { Select as MuiSelect, type SelectProps as MuiSelectProps } from "@mui/material";
import { type ReactNode, useMemo, useState } from "react";
import { SelectContext } from "../contexts/select.js";

type SelectProps = MuiSelectProps;

function Select({
  children: childrenProp,
  value: valueProp,
  label,
  ...props
}: SelectProps) {
  const [value, setValue] = useState<string>(() => valueProp === undefined ? "" : String(valueProp));
  const [children, setChildren] = useState<ReactNode | null>(null);
  const context = useMemo(() => ({
    value,
    setValue,
    children,
    setChildren
  }), [value, children]);

  function renderValue() {
    return value === ""
      ? label
      : children;
  }

  return (
    <SelectContext.Provider
      value={context}
    >
      <MuiSelect
        value={value}
        renderValue={renderValue}
        {...props}
      >
        {childrenProp}
      </MuiSelect>
    </SelectContext.Provider>
  )
}

export type {
  SelectProps
}

export {
  Select
}

