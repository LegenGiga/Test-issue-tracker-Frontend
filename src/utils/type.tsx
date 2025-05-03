
/**
 * A utility type that enforces only one property of a given type `T` to be initialized at a time.
 * 
 * This type ensures that:
 * - Exactly one key from the object `T` is required.
 * - All other keys in the object are explicitly set to `undefined` or omitted.
 * 
 * @template T - The object type for which only one property should be allowed at a time.
 * 
 * @example
 * type Example = OneOf<{ a: string; b: number; c: boolean }>;
 * 
 * // Valid:
 * const valid1: Example = { a: "hello" };
 * const valid2: Example = { b: 42 };
 * const valid3: Example = { c: true };
 * 
 * // Invalid:
 * const invalid1: Example = { a: "hello", b: 42 }; // Error: Only one property can be set.
 * const invalid2: Example = {}; // Error: At least one property must be set.
 */
export type OneOf<T> = {
    [K in keyof T]: {
      [P in K]: T[P];
    } & {
      [P in Exclude<keyof T, K>]?: never;
    }
}[keyof T];

export default {};