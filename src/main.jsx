import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import {Provider} from "react-redux"
import Store from './redux/StoreRedux'
import Home from "./Components/Home/Home.jsx"
import Success from "./Components/Success/Success.jsx"
import Error from "./Components/Error/Error.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path="success" element={<Success />} />
      <Route path="*" element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
