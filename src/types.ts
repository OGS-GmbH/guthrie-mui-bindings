import type { ElementType } from "react";

/**
 * Representing the bindings of the MUI components and icons.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type Elements = Record<string, ElementType>; // TODO(simonkov): Replace with exposed type from guthrie

/**
 * Representing the available variants of MUI icons as union of `string` literals.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type IconVariant = "outlined" | "rounded" | "twoTone" | "sharp" | "filled";

/**
 * `Function` type for mapping the kebab-case version of the component and icon names to a custom name. The function takes a `string` value (the kebab-case version of the name) and returns a `string` value (the custom name).
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type MapNamesFn = (value: string) => string;

/**
 * Options for the {@link getMuiIconBindings} function.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type GetMuiIconBindingsOptions = {
  /**
  * An `Array` of `string` literals representing the variants of MUI icons to include in the bindings. The available variants are derived from {@link IconVariant}.
   *
   * @since 2.0.0
   * @author Simon Kovtyk
   */
  variants: IconVariant[],
  /**
   * Function for mapping component names. See {@link MapNamesFn}.
   *
   * @since 2.0.0
   * @author Simon Kovtyk
   */
  mapNames?: MapNamesFn
}

/**
 * Options for the {@link getMuiComponentBindings} function.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type GetMuiComponentBindingsOptions = {
  /**
   * Function for mapping component names. See {@link MapNamesFn}.
   *
   * @since 2.0.0
   * @author Simon Kovtyk
   */
  mapNames?: MapNamesFn
}

export type {
  Elements,
  IconVariant,
  MapNamesFn,
  GetMuiIconBindingsOptions,
  GetMuiComponentBindingsOptions
}
