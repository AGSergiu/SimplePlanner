import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Divider, IconButton, Menu } from 'react-native-paper'
import { FormatMenuProps } from './FormatMenuProps'

const FormatMenu: React.FC<FormatMenuProps> = ({ onHeadingSelect }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const onMenuSelect = (heading: Headings) => {
    onHeadingSelect(heading)
    setMenuVisible(false)
  }

  return (
    <>
      <Menu
        visible={menuVisible}
        statusBarHeight={-60}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <IconButton
            onPress={() => setMenuVisible(!menuVisible)}
            animated
            icon="format-text-variant-outline"
          />
        }
      >
        <ScrollView
          style={{ maxHeight: 100 }}
          keyboardShouldPersistTaps="handled"
        >
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H1)
            }}
            title="H1"
            titleStyle={{ fontSize: 32 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H2)
            }}
            title="H2"
            titleStyle={{ fontSize: 26 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H3)
            }}
            title="H3"
            titleStyle={{ fontSize: 22 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H4)
            }}
            title="H4"
            titleStyle={{ fontSize: 20 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H5)
            }}
            title="H5"
            titleStyle={{ fontSize: 14 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              onMenuSelect(Headings.H6)
            }}
            title="H6"
            titleStyle={{ fontSize: 11 }}
          />
        </ScrollView>
      </Menu>
    </>
  )
}

enum Headings {
  H1 = '# ',
  H2 = '## ',
  H3 = '### ',
  H4 = '#### ',
  H5 = '##### ',
  H6 = '###### ',
}

export default FormatMenu
