import { muiComponentBindings } from "./components";
import { getMuiFilledIconBindings, getMuiOutlinedIconBindings, getMuiRoundedIconBindings, getMuiSharpIconBindings, getMuiTwoToneIconsBindings } from "./icons";
import type { Elements } from "./types";

/**
 * Options for the {@link getGuthrieMuiBindings} function.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type GetGuthrieMuiBindingsOptions = {
  /**
   * Icon variants to include in the returned bindings. If not specified, only filled icons will be included.
   * @default `["filled"]`
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  icons?: Array<"outlined" | "rounded" | "twoTone" | "sharp" | "filled">,
  /**
   * Whether to include MUI components in the returned bindings. If not specified, components will be included by default.
   * @default `true`
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  components?: boolean,
  /**
   * A function to map the original component and icon names to custom names in the returned bindings. If not specified, original names will be used.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  mapNames?: (value: string) => string
}

const defaultOptions: GetGuthrieMuiBindingsOptions = {
  icons: ["filled"],
  components: true
}

/**
 * Get a set of bindings for using Material UI components and icons with Guthrie. The returned bindings can be customized by specifying options (see {@link GetGuthrieMuiBindingsOptions}).
 *
 * @param options - Options to customize the returned bindings.
 * @returns A set of bindings for using Material UI components and icons with Guthrie.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getGuthrieMuiBindings (options: GetGuthrieMuiBindingsOptions): Elements {
  let elements: Elements = {};

  const configuredComponents = options?.components ?? defaultOptions.components;

  if (configuredComponents) {
    elements = {
      ...elements,
      ...muiComponentBindings
    };
  }

  const configuredIcons = options?.icons ?? defaultOptions.icons;

  configuredIcons?.forEach((variant) => {
    let icons;

    switch (variant) {
      case "outlined": {
        icons = getMuiOutlinedIconBindings();
        break;
      }

      case "sharp": {
        icons = getMuiSharpIconBindings();
        break;
      }

      case "twoTone": {
        icons = getMuiTwoToneIconsBindings();
        break;
      }

      case "rounded": {
        icons = getMuiRoundedIconBindings();
        break;
      }

      case "filled": {
        icons = getMuiFilledIconBindings();
        break;
      }
    }

    elements = {
      ...elements,
      ...icons
    };
  });

  if (options?.mapNames === undefined)
    return elements;

  return Object.fromEntries(
    Object.entries(elements).map(([key, value]) => [options.mapNames!(key), value])
  );
}

export type {
  GetGuthrieMuiBindingsOptions
}

export {
  getGuthrieMuiBindings
}

export * from "./components";
export * from "./icons";
export * from "./types";
