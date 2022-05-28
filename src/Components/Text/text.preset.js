import { colors } from "../../Theme/Colors";
import { spacing } from "../../Theme/Spacing";
import { typography } from "../../Theme/Typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.purpleText,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: colors.purpleText,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.purpleText,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 24,
    color: colors.white,
  },

  h2: {
    ...BOLD,
    fontSize: 20,
    color: colors.white,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 18,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 14,
    color: colors.white,
  },
};
