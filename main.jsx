import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import BookDetails from './components/BookDetails.jsx'
import AddBook from './components/AddBook.jsx'

import { Provider } from "react-redux"
import appStore from './redux/appStore.js'
import ErrorPage from './components/ErrorPage.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/browse", 
        element: <BrowseBooks />,
      },

      {
        path: "/books/:category", 
        element: <BrowseBooks />,
      },

      {
        path: "/books/details/:id", 
        element: <BookDetails />,
      },

      {
        path: "/addbook",
        element: <AddBook />,
      },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(

  <Provider store={appStore} >
    <RouterProvider router={appRouter} ></RouterProvider>
  </Provider>

)