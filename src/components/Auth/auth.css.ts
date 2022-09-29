import { style, } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
// import { button } from "../ui.css"


export const AuthLogo = style({
    maxWidth: '150px',
})

export const AuthBorder = style({
  padding: '3rem',
  border: `1px solid ${theme.colors.uiOutline}`,
  borderRadius: '.375rem',
  // maxWidth: '400px',
})

export const AuthLabel = style({
  // fontFamily: theme.fonts.text,
  // fontSize: theme.fontSizes[4],
  // fontWeight: theme.fontWeights.light,
  // color: theme.colors.offWhite,
  // // border: `1px solid ${theme.colors.uiOutline}`,
  // // padding: '.5rem',
  // justifySelf: 'flex-start',
  position: "absolute",
  top: "15px",
  left: "15px",
  padding: "0 4px",
  backgroundColor: "white",
  color:" #DADCE0",
  fontSize: "16px",
  transition: "0.5s",
  zIndex: 0,
})

export const AuthInput = style({
  // width: '100%',
  // margin: '1rem 0',
  fontFamily: theme.fonts.text,
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.light,
  color: theme.colors.offWhite,
  // border: `1px solid ${theme.colors.uiOutline}`,
  // borderRadius: theme.radii.button,
  // backgroundColor: theme.colors.secondary,
  // padding: '.5rem'
  // position: "relative",
  // height: "45px",
  // width: "90%",
  // marginBottom: "17px",
  position: "absolute",
  top: "0px",
  left: "0px",
  height: "100%",
  width: "100%",
  border: "1px solid #DADCE0",
  borderRadius: "7px",
  padding:" 0 20px",
  outline: "none",
  background: "none",
  zIndex: 1,

  ":focus": {
    border: `1px solid ${theme.colors.tertiary}`,
  },

})

export const AuthInputContainer = style({
  // maxWidth: "500px",
  // marginLeft: 0,
  // marginRight: 0,
  // paddingLeft: 0,
  // paddingRight: 0,
  position: "relative",
  height: "45px",
  width: "90%",
  marginBottom: "17px",
})

export const FormFlex = style({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  padding: "0 12rem",
})

export const AuthButton = style({
  cursor: 'pointer',
  display: "inline-flex",
  textDecoration: "none",
  color: theme.colors.primary,
  backgroundColor: theme.colors.quaternary,
  fontSize: theme.fontSizes[1],
  fontWeight: theme.fontWeights.light,
  fontFamily: theme.fonts.text,
  border: `1px solid ${theme.colors.quaternary}`,
  borderRadius: theme.radii.button,
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
      ":hover": {
        backgroundColor: theme.colors.white,
        color: theme.colors.offWhite,
      },
  })