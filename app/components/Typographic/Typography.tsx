import Variables from "app/Theme/Variables";
import React, { FC } from "react"
import { StyleSheet, Text, TextProps, TextStyle } from "react-native"
import styles from "./styles";
import { TypographyProps } from "./types"

type InheritedTextProps = Pick<TextProps, "onPress" | "style">;

export type TypographyVariant =
  | "todo" // secondary font
  | "todoGrey" // primary font
  | "small"
  | "regular"

interface IProps extends InheritedTextProps {
  variant: TypographyVariant;
}

const Typography: FC<IProps> = ({ children, variant = "todo", style, onPress }) => {

  const finalStyle: TextStyle = Object.assign({},
    { color: Variables.Colors.text },
    styles[variant],
    style || {})

  return (
    <Text
      style={finalStyle}
      onPress={onPress}>
      {children}
    </Text>
  )
}


export default Typography;