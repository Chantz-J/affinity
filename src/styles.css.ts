import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";


globalStyle("body", {
  margin: 0,
  fontFamily: theme.fonts.text,
  color: theme.colors.text,
  backgroundColor: theme.colors.primary,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("*", {
  boxSizing: "border-box",
});