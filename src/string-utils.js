export const convertCase = (str, _case) => {
  switch (_case) {
    case "small":
      return str.toLowerCase();
    case "upper":
      return str.toUpperCase();
    default:
      return str;
  }
};
export const wordCount = (str) => {
  return str.split(" ").length;
};
export const clean = (str) => {
  return str.trim();
};
export const countUpperCaseLetters = (str) => {
  return (str.match(/[A-Z]/g) || []).length;
};
export const countLowerCaseLetters = (str) => {
  return (str.match(/[a-z]/g) || []).length;
};
export const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());
};
export const toPascalCase = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/(?:^|[-_ ]+)(\w)/g, (_, c) => c.toUpperCase());
};
