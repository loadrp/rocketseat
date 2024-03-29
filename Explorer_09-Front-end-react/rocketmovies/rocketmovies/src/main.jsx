import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { App } from './pages/App'
import { Profile } from './pages/Profile'
import { ShowMovie } from './pages/ShowMovie'
import { CreateMovie } from './pages/CreateMovie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <CreateMovie/>
    </ThemeProvider>
  </React.StrictMode>
)
