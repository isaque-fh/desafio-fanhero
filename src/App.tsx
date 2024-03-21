import './App.css'
import { AppRoutes } from './routes/routes'
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral'

function App() {
  return (
    <>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </>
  )
}
export default App
