"use client"

import { MenuItem as MuiMenuItem, type MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { useSelect } from "../hooks/select.js";
import { type MouseEvent, useMemo } from "react";

type MenuItemProps = MuiMenuItemProps;

function MenuItem({
  children: childrenProp,
  value: valueProp,
  selected: selectedProp,
  ...props
}: MenuItemProps) {
  const select = useSelect();
  const selected = useMemo(() => selectedProp ?? String(valueProp) === select?.value, [valueProp, select?.value]);

  function handleClick(event: MouseEvent<HTMLLIElement>) {
    event.preventDefault();

    if (select !== null) {
      select.setChildren(childrenProp);
      select.setValue(
        String(valueProp)
      );
    }
  }

  return (
    <MuiMenuItem
      {...props}
      selected={selected}
      onClick={handleClick}
    >
      {childrenProp}
    </MuiMenuItem>
  )
}

export type {
  MenuItemProps
}

export {
  MenuItem
}

