import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/routes';
import { RouterProvider } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';
import { Provider } from 'react-redux';
import { store } from './store/sotore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </StrictMode>
)
