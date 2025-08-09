import { ImageSourcePropType } from "react-native";

export interface IAction {
  id: string;
  initialValue: number;
  image: ImageSourcePropType;
  display: string;
}
