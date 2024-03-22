export type BaseTheme = {
  colors: {
    primary: string;
    secondary: string;
    primary_light: string;
    primary_dark: string;
    yellow: string;
    white: string;
  };
  deviceQueries: {
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };
};

export type ThemeProps = {
  children: React.ReactNode;
};
