import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Resume from "./pages/Resume.jsx"
import Portfolio from "./pages/Portfolio.jsx"

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/About",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/resume",
      element: <Resume/>
    },
    {
      index: true,
      element: <Portfolio/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)