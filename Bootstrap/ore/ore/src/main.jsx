import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Addpost from './components/Addpost.jsx';
import Postlist from './components/Postlist.jsx';


const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Postlist />},
    {path: "/addpost", element: <Addpost />},
  ]},
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
