import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./sass/index.scss"
import App from './App.tsx'
import { AuthContextProvider } from './contexts/AuthContext.tsx'




// /Test
const initialState:ArrayState = [
  {
    id: 1,
    title: "Apprendre React JS",
    completed: true
  },
  {
    id: 2,
    title: "Apprendre Docker",
    completed: false
  }
]

type ArrayState = {
  id: number,
  completed: boolean,
  title?: string
}[]

let id = 2;
const ADD_TODO_ACTION = "ADD_TODO_ACTION"
interface ActionType {
  type: string | undefined,
  payload: {[key: string]: any} | undefined
}


function Reducer (state = initialState , action: ActionType) {
  switch(action.type) {
    case ADD_TODO_ACTION:
      return [...state, {id: ++id, completed: true, ...action.payload}]
    default:
      return state
  }
}

const state = Reducer(undefined, {})
const newState = Reducer(state, {type: ADD_TODO_ACTION, payload: {title: "Demo"}})
const secondState = Reducer(state, {type: ADD_TODO_ACTION, payload: {title: "Devenir très riche"}})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AuthContextProvider> */}
     <App/>
    {/* </AuthContextProvider> */}
  </StrictMode>,
)
