import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  type DefaultTheme = ThemeType;
}
