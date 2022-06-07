import { deleteTodo } from 'app/features/todo/todosSlice'
import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { DeleteWrapperTypes } from './types'

const DeleteWrapper: React.FC<DeleteWrapperTypes> = ({ todoId, children }) => {
  const dispatch = useDispatch()
  const handleOnPress = () => {
    dispatch(deleteTodo({ id: todoId }))
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
      {children}
      <IconButton onPress={() => handleOnPress()} icon="close" size={20} />
    </View>
  )
}

export default DeleteWrapper
