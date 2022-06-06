/* eslint-disable react/require-default-props */
import * as React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import adjust from '../themes/adjust'
import { Colors } from '../Variables'
import styles from './Typography.styles'

interface IPorps {
  headerTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  bold?: boolean
  italic?: boolean
  style?: TextStyle | TextStyle[]
  value?: string
}

type InheritedTextProps = Pick<TextProps, 'style' | 'onPress'>

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'link'

interface OwnProps extends InheritedTextProps {
  variant: TypographyVariant
}

const MyTypography: React.FC<OwnProps> = ({
  children,
  variant,
  style,
  onPress,
}) => {
  const finalStyle: TextStyle = Object.assign(
    {},
    { color: Colors.text },
    styles[variant],
    style || {},
  )

  return (
    <Text style={finalStyle} onPress={onPress}>
      {children}
    </Text>
  )
}

export { MyTypography }
