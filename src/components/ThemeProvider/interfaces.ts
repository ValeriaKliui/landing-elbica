export type BaseTheme = {
  colors: {
    primary: string;
    secondary: string;
    primary_light: string;
    yellow: string;
    white: string;
  };
};

export type ThemeProps = {
  children: React.ReactNode;
};
