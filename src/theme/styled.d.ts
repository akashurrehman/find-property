import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  // Add a dummy property to avoid empty interface error
  export interface DefaultTheme extends ThemeType {
    __nonEmpty?: true;
  }
}
