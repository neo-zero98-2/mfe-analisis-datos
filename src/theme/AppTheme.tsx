import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './theme'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const AppTheme = ({children}: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
