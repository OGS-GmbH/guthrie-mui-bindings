function pascalCaseToKebabCase(value: string): string {
  let result = "";

  for (let i = 0; i < value.length; i++) {
    const char = value[i]!;

    if (char.toLowerCase() === char) {
      result += char;
      continue;
    }

    if (i === 0) {
      result += char.toLowerCase();
      continue;
    }

    result += `-${char.toLowerCase()}`;
  }

  return result;
}

export { pascalCaseToKebabCase };
