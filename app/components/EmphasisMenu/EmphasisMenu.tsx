import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors, Divider, IconButton } from 'react-native-paper'
import { EmphasisMenuProps } from './EmphasisMenuProps'

enum Emphasis {
  BOLD = '**',
  ITALIC = '_',
  STRIKETHROUGH = '~~',
}

const EmphasisMenu: React.FC<EmphasisMenuProps> = ({ onEmphasisSelect }) => {
  const onMenuSelect = (heading: Emphasis) => {
    onEmphasisSelect(heading)
  }

  const [isBoldEnabled, setIsBoldEnabled] = useState(false)
  const [isItalicEnabled, setIsItalicEnabled] = useState(false)
  const [isStrikeEnabled, setIsStrikeEnabled] = useState(false)

  return (
    <View style={styles.textStyleBox}>
      <IconButton
        icon={'format-bold'}
        animated
        onPress={() => {
          onMenuSelect(Emphasis.BOLD)
          setIsBoldEnabled(!isBoldEnabled)
        }}
        style={{
          backgroundColor: isBoldEnabled ? Colors.grey600 : Colors.transparent,
        }}
      />
      <Divider style={{ width: 1, height: '70%' }} />
      <IconButton
        icon={'format-italic'}
        onPress={() => {
          onMenuSelect(Emphasis.ITALIC)
          setIsItalicEnabled(!isItalicEnabled)
        }}
        style={{
          backgroundColor: isItalicEnabled
            ? Colors.grey600
            : Colors.transparent,
        }}
      />
      <Divider style={{ width: 1, height: '70%' }} />
      <IconButton
        icon={'format-strikethrough'}
        onPress={() => {
          onMenuSelect(Emphasis.STRIKETHROUGH)
          setIsStrikeEnabled(!isStrikeEnabled)
        }}
        style={{
          backgroundColor: isStrikeEnabled
            ? Colors.grey600
            : Colors.transparent,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  surface: {
    alignSelf: 'center',
    // flex: 1,
    flexDirection: 'column',
  },
  textStyleBox: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // maxHeight: 45,
  },
})

export default EmphasisMenu
