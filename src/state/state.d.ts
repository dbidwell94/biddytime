import { IGlobalState } from "./index";

declare module "react-redux" {
  export interface DefaultRootState extends IGlobalState {}
}
