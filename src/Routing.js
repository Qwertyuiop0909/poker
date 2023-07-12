import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignInPage } from './components/SignInPage/SignInPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signin',
        element: <SignInPage />,
      },
    ],
  },
])
