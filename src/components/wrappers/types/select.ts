import { type Dispatch, type ReactNode, type SetStateAction } from "react";

type SelectContextValue = {
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  children: ReactNode | null;
  setChildren: Dispatch<SetStateAction<ReactNode | null>>
}

export type {
  SelectContextValue
}

