import type { Elements, GetMuiIconBindingsOptions, IconVariant } from "./types";
import { pascalCaseToKebabCase } from "./utils";
import type { ElementType } from "react";

const variantSuffix: Record<Exclude<IconVariant, "filled">, string> = {
  outlined: "Outlined",
  rounded: "Rounded",
  twoTone: "TwoTone",
  sharp: "Sharp"
}

/**
 * `Function` to get MUI icons bindings based on the provided options.
 *
 * @remarks We recommend using MUI's [Icon Component](https://mui.com/material-ui/api/icon/) instead. This function dynamically imports the MUI icons and filters them based on the specified variants. In a worst-case-scenario, it contains about 10k icons, which are hard to handle eagerly. This `Function` is designed to handle all icons in O(n) time complexity, where n is the total number of icons. By providing a {@link MapNamesFn}, time complexity will grow to O(2n) because the function needs to be applied to every icon.
 *
 * @param options - An `Object` containing the options for getting the MUI icons bindings. See {@link GetMuiIconBindingsOptions}.
 * @returns An `Object` containing the MUI icons bindings based on the provided options. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
async function getMuiIconBindings (
  options: GetMuiIconBindingsOptions
): Promise<Elements> {
  const icons = await import("@mui/icons-material")
  const filteredIcons: Record<string, ElementType> = {};

  for (const key in icons) {
    let appliesToVariant = false;

    for (const variant of options.variants) {
      switch (variant) {
        case "filled": {
          appliesToVariant = !(
            key.endsWith(variantSuffix.outlined) ||
            key.endsWith(variantSuffix.rounded) ||
            key.endsWith(variantSuffix.twoTone) ||
            key.endsWith(variantSuffix.sharp)
          );
          break;
        }
        default: {
          const currentVariantSuffix = variantSuffix[variant];
          appliesToVariant = key.endsWith(currentVariantSuffix);
          break;
        }
      }

      if (appliesToVariant) break;
    }

    if (appliesToVariant) {
      const kebabCasedKey = pascalCaseToKebabCase(key);
      const currentKey = options.mapNames
        ? options.mapNames(kebabCasedKey)
        : kebabCasedKey;

      // @ts-ignore
      filteredIcons[currentKey] = icons[key];
    }
  }

  return filteredIcons;
}

export {
  getMuiIconBindings
}
