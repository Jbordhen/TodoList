import { useContext, useEffect, useState } from 'react'
import store from '../components/Store'
import Todos from '../components/Todo'
import {
  Wrapper,
  Header,
  Row,
  Input,
  Button,
  Col,
  Modal
} from '../styles/styles'

const HomeScreen = () => {
  const { todos, setTodos } = useContext(store)

  const [value, setValue] = useState('')
  const [updatedValue, setUpdatedValue] = useState('')
  const [editTodo, setEditTodo] = useState('')

  const handleTodo = (e) => {
    e.preventDefault()
    value
      ? setTodos([{ id: Date.now(), completed: false, value: value }, ...todos])
      : alert('Write something!')
    setValue('')
  }

  const resetTodos = () => {
    setValue('')
    setTodos([])
  }

  const toggleComplete = (todo) => {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : item
      )
    ])
  }

  const updateTodo = (value) => {
    setTodos([
      ...todos.map((item) =>
        item.id === editTodo.id
          ? {
              ...editTodo,
              value: value
            }
          : item
      )
    ])
    setUpdatedValue('')
    setShowModal(false)
  }

  const handleDeleteTodo = (deleteTodoId) => {
    setTodos([...todos.filter((todo) => todo.id !== deleteTodoId)])
  }

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {}, [todos])

  return (
    <>
      <Wrapper showModal={showModal}>
        <Header>Todo List</Header>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleTodo(e)
          }}>
          <Input
            name='todo'
            placeholder='Add a new todo'
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <div>
            <Button type='submit'>Add Todo</Button>
            <Button type='reset' onClick={resetTodos}>
              Clear All Todos
            </Button>
          </div>
        </form>
        <Col>
          {todos ? (
            todos.map((todo) => (
              <Col key={todo.id}>
                <Todos
                  toggleComplete={() => toggleComplete(todo)}
                  todo={todo}
                  setUpdatedValue={setUpdatedValue}
                  setShowModal={setShowModal}
                  setEditTodo={setEditTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              </Col>
            ))
          ) : (
            // console.log(todos)
            <Row>Add Some Todos</Row>
          )}
        </Col>
      </Wrapper>
      {showModal && (
        <Modal>
          <Col>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                updatedValue && updateTodo(updatedValue)
              }}>
              <Input
                type='Todo'
                value={updatedValue}
                onChange={(e) => {
                  setUpdatedValue(e.target.value)
                }}
              />
              <Button type='submit'>Update Todo</Button>
              <Button
                type='reset'
                onClick={() => {
                  setUpdatedValue('')
                  setShowModal(false)
                }}>
                Cancel
              </Button>
            </form>
          </Col>
        </Modal>
      )}
    </>
  )
}

export default HomeScreen
