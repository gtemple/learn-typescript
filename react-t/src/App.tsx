import { useCallback, useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const Heading = ({title}: {title: string}) => <h2>{title}</h2>;
const Box = ({ children }: {children: React.ReactNode}) => (
  <div style={{
    padding: "1rem",
    fontWeight: "bold",
  }}
  >
    {children}
  </div>
)

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void}> = ({items}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.item}>{item}</li>
    ))}
  </ul>
)

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType = 
  | { type: "Add", text: string}
  | { type: "Remove", id: number}


function App() {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, [])

  const [payload, setPayload] = useState<Payload | null>(null);
  const [todos, dispatch] = useReducer(
    (state: Todo[], action: ActionType) => {
      switch(action.type) {
        case "Add":
          return [
            ...state,
            {
              id: todos.length,
              text: action.text,
              done: false
            }
          ]
      case "Remove":
        return state.filter(({ id }) => id !== action.id)
      default:
        throw new Error()
      }
    }, 
    []
  )

  useEffect(() => {
    fetch("/data.json")
      .then(resp => resp.json())
      .then((data) => {
        setPayload(data)
      })
  }, [])

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "Add",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = ''
    }
  }, [])

  return (
    <div className="App">
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={["one", "two", "three"]} onClick={onListClick}/>
      <Box>{JSON.stringify(payload)}</Box>
      <Heading title ="Todos" />

      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({
            type: "Remove"
            id: todo.id
          })
        }>
        </button>
        </div>

      ))}
        <div>
          <input type="text" ref={newTodoRef} />
          <button onClick={onAddTodo}>Add Todo</button>
        </div>
    </div>
  );
}

export default App;
