import type { MapNameFn } from "@ogs-gmbh/guthrie";

/**
 * Representing the available variants of MUI icons as union of `string` literals.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type IconVariant = "outlined" | "rounded" | "twoTone" | "sharp" | "filled";

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
  variants: IconVariant[];
  /**
   * Function for mapping component names.
   *
   * @since 2.0.0
   * @author Simon Kovtyk
   */
  mapName?: MapNameFn;
};

export type { IconVariant, GetMuiIconBindingsOptions };
