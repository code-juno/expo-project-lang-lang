export const globalColors = {
  primary: 'red',
  secondary: 'green',
  accent: 'pink',
  neutral: 'black',
  neutral0: 'white'
}

export const uiColors = {
  bottomTab: {
    active: globalColors.primary,
    inactive: globalColors.neutral,
  },
}

export const lightTheme = {
  dark: false,
  colors: {
    primary: globalColors.primary, //The primary color of the app used to tint various elements.
    background: globalColors.neutral0, //The color of various backgrounds, such as background color for the screens.
    card: globalColors.neutral0, //The background color of card-like elements, such as headers, tab bars etc.
    text: globalColors.neutral, //The text color of various elements.
    border: globalColors.neutral0, //The color of borders, e.g. header border, tab bar border etc.
    notification: globalColors.accent, //The color of Tab Navigator badge.
  },
};