module.exports = {
  convertCase(str, _case) {
    switch (_case) {
      case "small":
        return str.toLowerCase();
      case "upper":
        return str.toUpperCase();
      default:
        return str;
    }
  },
  wordCount(str) {
    return str.split(" ").length;
  },
  clean(str) {
    return str.trim();
  },
  countUpperCaseLetters(str) {
    return (str.match(/[A-Z]/g) || []).length;
  },
  countLowerCaseLetters(str) {
    return (str.match(/[a-z]/g) || []).length;
  },
  toCamelCase(str) {
    return str.toLowerCase().replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());
  },
  toPascalCase(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/(?:^|[-_ ]+)(\w)/g, (_, c) => c.toUpperCase());
  },
};
