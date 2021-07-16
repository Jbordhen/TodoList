import { IconDiv, Todo } from '../styles/styles'
const Todos = ({
  todo,
  setEditTodo,
  toggleComplete,
  setShowModal,
  handleDeleteTodo,
  setUpdatedValue
}) => {
  return (
    <Todo completed={todo.completed} onDoubleClick={() => toggleComplete(todo)}>
      <p onClick={() => toggleComplete(todo)}>{todo.value}</p>
      <IconDiv>
        <i
          onClick={() => {
            // console.log(todo.id)
            setUpdatedValue(todo.value)
            setEditTodo(todo)
            setShowModal(true)
          }}
          className='fas fa-edit'></i>{' '}
        <i
          onClick={() => handleDeleteTodo(todo.id)}
          className='fas fa-trash'></i>
      </IconDiv>
    </Todo>
  )
}
export default Todos
