import { type Dispatch, type SetStateAction } from "react";

type TabsContextValue = {
  value: unknown;
  setValue: Dispatch<SetStateAction<unknown>>;
};

export type { TabsContextValue };
