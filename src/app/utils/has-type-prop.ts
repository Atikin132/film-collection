export function hasStringProp<K extends string>(obj: unknown, key: K): obj is Record<K, string> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    key in obj &&
    typeof (obj as Record<string, unknown>)[key] === 'string'
  );
}

export function hasNumberProp<K extends string>(obj: unknown, key: K): obj is Record<K, number> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    key in obj &&
    typeof (obj as Record<string, unknown>)[key] === 'number'
  );
}

export function hasBooleanProp<K extends string>(obj: unknown, key: K): obj is Record<K, boolean> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    key in obj &&
    typeof (obj as Record<string, unknown>)[key] === 'boolean'
  );
}
