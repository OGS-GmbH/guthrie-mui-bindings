import * as icons from "@mui/icons-material";
import type { Elements } from "./types";
import { pascalCaseToKebabCase } from "./utils";

const variantSuffix = {
  outlined: "Outlined",
  rounded: "Rounded",
  twoTone: "TwoTone",
  sharp: "Sharp"
}

function getMuiIconBindingBySuffix (compare: (value: string) => boolean): Elements {
  return Object.fromEntries(
    Object.entries(icons).reduce((acc, [key, value]) => {
      if (!compare(value.name))
        return acc;

      acc.push([pascalCaseToKebabCase(key), value]);

      return acc;
    }, [] as [string, typeof icons[keyof typeof icons]][])
  )
}

/**
 * `Function` to get all MUI icons bindings with a filled style.
 * @returns An `Object` containing all MUI icons bindings with a filled style. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiFilledIconBindings (): Elements {
  return getMuiIconBindingBySuffix((value) => value.endsWith(variantSuffix.outlined)
    || value.endsWith(variantSuffix.rounded)
    || value.endsWith(variantSuffix.twoTone)
    || value.endsWith(variantSuffix.sharp)
  )
}

/**
 * `Function` to get all MUI icons bindings with a outlined style.
 * @returns An `Object` containing all MUI icons bindings with a outlined style. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiOutlinedIconBindings (): Elements {
  return getMuiIconBindingBySuffix((value) => value.endsWith(variantSuffix.outlined));
}

/**
 * `Function` to get all MUI icons bindings with a rounded style.
 * @returns An `Object` containing all MUI icons bindings with a rounded style. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiRoundedIconBindings (): Elements {
  return getMuiIconBindingBySuffix((value) => value.endsWith(variantSuffix.rounded));
}

/**
 * `Function` to get all MUI icons bindings with a two-tone style.
 * @returns An `Object` containing all MUI icons bindings with a two-tone style. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiTwoToneIconsBindings (): Elements {
  return getMuiIconBindingBySuffix((value) => value.endsWith(variantSuffix.twoTone));
}

/**
 * `Function` to get all MUI icons bindings with a sharpstyle.
 * @returns An `Object` containing all MUI icons bindings with a sharp style. The keys are the kebab-case version of the icon names, and the values are the corresponding MUI icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Bindings
 */
function getMuiSharpIconBindings (): Elements {
  return getMuiIconBindingBySuffix((value) => value.endsWith(variantSuffix.sharp));
}

export {
  getMuiFilledIconBindings,
  getMuiOutlinedIconBindings,
  getMuiRoundedIconBindings,
  getMuiTwoToneIconsBindings,
  getMuiSharpIconBindings
}
