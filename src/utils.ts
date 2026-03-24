function pascalCaseToKebabCase(value: string): string {
  let result = "";

  for (const char of value) {
    if (char.toUpperCase() !== char) {
      result += char;
      continue;
    }

    result += `-${char.toLowerCase()}`;
  }

  return result;
}

export {
  pascalCaseToKebabCase
}
