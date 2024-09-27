import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const router =createBrowserRouter([
//  { 
//   path:"/",
//   element : <Layout />,
//   children:[
//     {
//       path : "",
//       element : <Home/>,
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} /> {/* Use index for the default route */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);



root.render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>
);

