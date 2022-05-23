import React from 'react'
import RNMarkdown from 'react-native-markdown-display'
import { MarkdownDisplayProps } from './types'
import { useTheme } from 'react-native-paper'

const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({
  text,
  ...props
}) => {
  const theme = useTheme()
  return (
    <RNMarkdown
      {...props}
      style={{
        body: {
          flex: 1,
          color: theme.colors.text,
          fontFamily: 'MontserratAlternates-Regular',
        },
      }}
    >
      {text}
    </RNMarkdown>
  )
}

export default MarkdownDisplay
