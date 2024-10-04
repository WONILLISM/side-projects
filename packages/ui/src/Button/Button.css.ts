import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
});

export const primary = style({
  backgroundColor: "blue",
  color: "white",
});

export const secondary = style({
  backgroundColor: "gray",
  color: "black",
});
