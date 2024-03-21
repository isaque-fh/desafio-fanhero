import { Provider } from 'react-redux'
import './App.css'
import { store } from './application/store'
import User from './presentation/pages/users/Users'
import { ThemeProvider } from '@mui/material'
import { theme } from './shared/theme/index'
import { MenuLateral } from './shared/components/menu-lateral/menuLateral'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MenuLateral>
            <User />
          </MenuLateral>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
