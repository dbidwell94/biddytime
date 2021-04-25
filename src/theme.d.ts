import { ITheme } from "./index";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
