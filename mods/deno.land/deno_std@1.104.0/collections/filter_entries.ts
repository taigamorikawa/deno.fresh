// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

/**
 * Returns a new record with all entries of the given record except the ones that do not match the given predicate
 *
 * Example:
 *
 * ```ts
 * import { filterEntries } from "./filter_entries.ts";
 * import { assertEquals } from "../testing/asserts.ts";
 *
 * const menu = {
 *     'Salad': 11,
 *     'Soup': 8,
 *     'Pasta': 13,
 * } as const;
 * const myOptions = filterEntries(menu,
 *     ([ item, price ]) => item !== 'Pasta' && price < 10,
 * )
 *
 * assertEquals(myOptions, {
 *     'Soup': 8,
 * })
 * ```
 */
export function filterEntries<T>(
  record: Record<string, T>,
  predicate: (entry: [string, T]) => boolean,
): Record<string, T> {
  const ret: Record<string, T> = {};
  const entries = Object.entries(record);

  for (const [key, value] of entries) {
    if (predicate([key, value])) {
      ret[key] = value;
    }
  }

  return ret;
}
