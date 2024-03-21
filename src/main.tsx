import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './application/store.ts'
import { theme } from './shared/theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>

    </Provider>
  </ThemeProvider>
)
