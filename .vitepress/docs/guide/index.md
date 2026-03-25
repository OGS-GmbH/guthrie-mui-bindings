---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add @ogs-gmbh/guthrie-mui-bindings
```

```sh [pnpm]
$ pnpm add @ogs-gmbh/guthrie-mui-bindings
```

```sh [yarn]
$ yarn add @ogs-gmbh/guthrie-mui-bindings
```

```sh [bun]
$ bun add @ogs-gmbh/guthrie-mui-bindings
```

:::

### Usage

Here's a simple example using [`getMuiComponentBindings`](/reference/Bindings/getMuiComponentBindings). You can get a deeper understanding by looking at the [reference](/reference).

```tsx [example.tsx]
import { Guthrie, withElements, withOperators, withFns } from "@ogs-gmbh/guthrie";
import { getMuiComponentBindings } from "@ogs-gmbh/guthrie-mui-bindings";

function MyPage () {
  return (
    <Guthrie
      elements={withElements({
        elements: getMuiComponentBindings({
          mapNames: (value) => `mui-${value}`
        })
      })}
      operators={
        withOperators({
          options: {
            universal: true
          }
        })
      }
      fns={
        withFns({
          options: {
            native: true
          }
        })
      }
      page={page}
    />
  )
}
```
