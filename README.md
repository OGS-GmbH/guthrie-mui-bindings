> *We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)*

# Guthrie MUI Bindings
*UI integration layer that connects the dynamic JSON-driven rendering capabilities of Guthrie with the component ecosystem of Material UI (MUI).*

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/guthrie-mui-bindings?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/guthrie-mui-bindings/actions/workflows/main-deploy.yml" target="_blank"><img alt="workflow badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/guthrie-mui-bindings/main-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/guthrie-mui-bindings" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Fguthrie-mui-bindings?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Predefined MUI Component Bindings**\
  Offers a curated set of bindings that map Guthrie JSON schemas directly to Material UI components, enabling ready-to-use UI elements without manual wiring.

- **Icon Integration**\
  Provides built-in support for MUI icons within JSON definitions, allowing icons to be rendered declaratively alongside components.

- **Type-Safe Bindings**\
  Ensures that all JSON-to-component mappings conform to expected TypeScript types, reducing runtime errors and enforcing consistency.

- **Extensibility**\
  Allows developers to add or override bindings for custom components, supporting domain-specific UI requirements while maintaining a uniform architecture.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/guthrie-mui-bindings](https://ogs-gmbh.github.io/guthrie-mui-bindings).

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

### Installation

Using npm:
```sh
$ npm install @ogs-gmbh/guthrie-mui-bindings
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add @ogs-gmbh/guthrie-mui-bindings
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add @ogs-gmbh/guthrie-mui-bindings
  ```
  
  Using bun:
  ```sh
  $ bun add @ogs-gmbh/guthrie-mui-bindings
  ```

</details>

### Usage

Here's a simple example using [`getGuthrieMuiBindings`](https://ogs-gmbh.github.io/guthrie-mui-bindings/reference/Bindings/getGuthrieMuiBindings). You can get a deeper understanding by looking at the [reference](https://ogs-gmbh.github.io/guthrie-mui-bindings/reference).

```tsx
import { Guthrie, withElements, withOperators, withFns } from "@ogs-gmbh/guthrie";
import { getGuthrieMuiBindings } from "@ogs-gmbh/guthrie-mui-bindings";

function MyPage () {
  return (
    <Guthrie
      elements={
        withElements({
          elements: getGuthrieMuiBindings()
        })
      }
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

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing
Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests
Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests
GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct
We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
