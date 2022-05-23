import { Checkbox, Text } from 'react-native-paper'
import React from 'react'
import MarkdownDisplay from '../MarkdownDisplay/RNMarkdown'
import { CheckBoxProps } from './types'
import { View } from 'react-native'

const TodoCheckbox: React.FC<CheckBoxProps> = ({
  todo,
  onToggle,
  ...props
}) => {
  const [isCheck, setIsCheck] = React.useState(todo.completed!)
  React.useEffect(() => {
    onToggle(isCheck)
  }, [isCheck])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Checkbox
        {...props}
        key={todo.id}
        status={isCheck ? 'checked' : 'unchecked'}
        onPress={() => {
          setIsCheck(!isCheck)
          // onToggle(isCheck)
        }}
      />
      <MarkdownDisplay text={todo.text} />
    </View>
  )
}

export default TodoCheckbox
