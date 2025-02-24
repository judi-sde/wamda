export function formatNumber(language: "en" | "ar") {
  return `${language === "en" ? "+" : ""}963994912998${
    language === "ar" ? "+" : ""
  }`;
}
