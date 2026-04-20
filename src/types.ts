/**
 * `Function` type for mapping the kebab-case version of the component and icon names to a custom name. The function takes a `string` value (the kebab-case version of the name) and returns a `string` value (the custom name).
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type MapNamesFn = (value: string) => string;

/**
 * Options for the {@link getMuiComponentBindings} function.
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 * @category Types
 */

export type { MapNamesFn };
