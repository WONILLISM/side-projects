import { action } from "./action";
import { background } from "./background";
import { error } from "./error";
import { info } from "./info";
import { primary } from "./primary";
import { secondary } from "./secondary";
import { success } from "./success";
import { text } from "./text";
import { warning } from "./warning";

export const light = {
  text: text.light,
  primary: primary.light,
  secondary: secondary.light,
  error: error.light,
  warning: warning.light,
  info: info.light,
  success: success.light,
  background: background.light,
  action: action.light,
};

export const dark = {
  text: text.dark,
  primary: primary.dark,
  secondary: secondary.dark,
  error: error.dark,
  warning: warning.dark,
  info: info.dark,
  success: success.dark,
  background: background.dark,
  action: action.dark,
};
