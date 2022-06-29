import Variables, { FontSize } from 'app/Theme/Variables';
import { StyleSheet, TextStyle, Platform } from "react-native";

interface Styles {
  todo: TextStyle;
  todoGrey: TextStyle;
  small: TextStyle;
  regular: TextStyle;
  [key: string]: any;
}
export default StyleSheet.create<Styles>({
  todo: {
    fontSize: FontSize.small,
  },
  todoGrey: {
    fontSize: FontSize.small,
    color: Variables.Colors.textGrey,
    textDecorationLine: 'line-through'
  },
  small: {
    fontSize: FontSize.small,
    color: Variables.Colors.text,
  },
  regular: {
    fontSize: FontSize.regular,
    color: Variables.Colors.text,
  }
});
