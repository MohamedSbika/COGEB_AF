import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header'
import Theme from './components/Theme'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import ListingPage from './pages/ListingPage'
import SaveListing from './pages/SaveListing'
import Search from './pages/Search'
import Message from './pages/Message'
import CreateProject from './pages/CreateProject'
import SocketConnection from './components/SocketConnection'
import UpdateProject from './pages/UpdateProject'
import ProjectPage from './pages/ProjectPage'
import SearchProject from './pages/SearchProject'
import SaveProjects from "./pages/SaveProjects"
import Homee from './pages/Homee'
import About from './pages/About'
import Contact from './pages/Contact'
import NavbarComp from './components/NavbarComp'


function App() {
  return (
    <>
      <SocketConnection />
      <BrowserRouter>
        <NavbarComp />
        {/* <Theme/> */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Homee />} />
          <Route path='/listing/:id' element={<ListingPage />} />
          <Route path='/projects/:id' element={<ProjectPage />}/>
          <Route path='/search?' element={<Search />} />
          <Route path='/searchProject?' element={<SearchProject />} />

         
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


          {/* /---------Private Routes-----------/ */}
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create_project' element={<CreateProject />} />
            <Route path='/create_post' element={<CreatePost />} />
            <Route path='/update_post/:id' element={<UpdatePost />} />
            <Route path='/update_project/:id' element={<UpdateProject />} />
            <Route path='/saved_listing' element={<SaveListing />} />
            <Route path='/saved_project' element={<SaveProjects />} />
            <Route path='/message' element={<Message />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
