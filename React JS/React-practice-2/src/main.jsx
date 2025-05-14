import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import ShoppingList from './components/ShoppingList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <TodoList />
    <ShoppingList />
  </StrictMode>,
)
