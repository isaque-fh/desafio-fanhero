import { createTheme } from "@mui/material";
import Colors from "./colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { typography } = createTheme()
const breakpoints = createBreakpoints({})

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary
    },
    secondary: {
      main: Colors.White
    },
    background: {
      default: Colors.White
    },
    text: {
      primary: Colors.BlackInspire,
      secondary: Colors.BlueGray
    },
    error: {
      main: Colors.RedAlert
    },
    divider: Colors.GrayLine
  },
  typography: {
    htmlFontSize: 16,
    [breakpoints.up('md')]: {
      htmlFontSize: 14
    },
    fontFamily: 'Inter',
    h1: {
      fontSize: typography.pxToRem(28),
      fontWeight: 600
    },
    h2: {
      fontSize: typography.pxToRem(25),
      fontWeight: 600
    },
    h3: {
      fontSize: typography.pxToRem(20),
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: typography.pxToRem(16),
      fontWeight: 600
    },
    body1: {
      fontSize: typography.pxToRem(16)
    },
    body2: {
      fontSize: typography.pxToRem(14)
    },
    caption: {
      fontSize: typography.pxToRem(14),
      fontWeight: 600
    },
    button: {
      fontSize: typography.pxToRem(16)
    },
    subtitle2: {
      color: Colors.BlueGray,
      fontSize: typography.pxToRem(14),
      fontFamily: 'Inter',
      fontWeight: 400
    }
  },

})