import React from 'react'
import "./App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Rootlayout from './layout/Rootlayout'
import NotFound from './pages/NotFound'
import Project from './pages/Project'
import Events from './pages/Events'
import Donation from './pages/Donation'
import Volunteer from './pages/Volunteer'
import Mission from './pages/Mission'
import Board from './pages/Board'
import Gallery from './pages/Gallery'
import Donate2 from './pages/Donation2'



function App() {

      const router = createBrowserRouter(createRoutesFromElements(

            <Route path='/' element={<Rootlayout />}>
                  <Route index element={<Home />} />
                  <Route path='Contact' element={<Contact />} />
                  <Route path='About' element={<About />} />
                  <Route path='Project' element={<Project />} />
                  <Route path='Events' element={<Events />} />
                  <Route path='Donation' element={<Donation />} />
                  <Route path='Volunteer' element={<Volunteer />} />
                  <Route path='Mission' element={<Mission />} />
                  <Route path='Board of trustees' element={<Board />} />
                  <Route path='Gallery' element={<Gallery />} />
                  <Route path='QR Code Donate' element={<Donate2 />} />
                  <Route path='*' element={<NotFound />} />
            </Route>
      ))

      return (


            <RouterProvider router={router}>

            </RouterProvider>


      )

}
export default App
