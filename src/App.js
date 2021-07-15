import HomeScreen from './screens/HomeScreen'
import { createGlobalStyle } from 'styled-components'
import useLocalStorage from './hooks/useLocalStorage'
import store from './components/Store'

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    margin: auto;
    padding: 0;
    width: 95vw;
    height: 100vh;
    justify-content: center;
    /* align-items: center; */
    background-color: rgb(34, 40, 49);
    font-size: 16px;
    color: white;
    .fas{
      color: coral;
      cursor: pointer;
    }
  }
`

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', [{}])

  return (
    <store.Provider value={{ todos, setTodos }}>
      <GlobalStyle />
      <HomeScreen />
    </store.Provider>
  )
}
