import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from './components/Contact';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="users" element={user ? <AllUsers /> : <Signup />} /> */}
        {/* <Route path="settings" element={user ? <UserSettings /> : <Signup />} /> */}
      </Route>
    )
  );
  return (
      <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App