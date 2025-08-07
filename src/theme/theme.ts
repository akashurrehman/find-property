const theme = {
    colors: {
    background: '#ffffff',
    primaryText: '#2c3e50',
    secondaryText: '#7f8c8d',
    buttonBackground: '#2c3e50',
    buttonHover: '#34495e',
    white: '#ffffff',

    // Form-related
    formBackground: '#00284b',
    formBorder: '#cd9b4b',
    highlight: '#4a69bd',
    checkboxAccent: '#4a69bd',
    submitBackground: '#cd9b4b',
    submitHover: '#8d6d3a',
    inputBorder: 'rgba(255, 255, 255, 0.3)',
    inputBackground: 'rgba(255, 255, 255, 0.1)',
    inputFocusBackground: 'rgba(255, 255, 255, 0.2)',
    inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.2)',

    // Footer-specific
    footerBackground: '#1e3a5f',
    footerText: '#e8f4fd',
    footerHighlight: '#d4af37',
    footerBottomBackground: '#e8f4fd',
    footerBottomText: '#1e3a5f',
    footerCopyright: '#666',

    // Header/Nav-specific
    headerBackground: '#1e3a5f',
    headerText: '#ffffff',
    navHover: '#d4af37',
    mobileNavBackground: '#1e3a5f',
    overlayBackground: 'rgba(0, 0, 0, 0.5)',
    searchBarBackground: '#00284b80',
    inputBorderColor: '#ccc',
    inputFocusShadow: 'rgba(30, 58, 95, 0.1)',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '20px',
    lg: '40px',
    xl: '60px',
  },
  fontSizes: {
    xs: '0.8rem',
    sm: '0.9rem',
    base: '1rem',
    md: '1.2rem',
    lg: '2rem',
    xl: '2.5rem',
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
  shadow: {
    light: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1240px',
  },
};

export default theme;
export type ThemeType = typeof theme;
