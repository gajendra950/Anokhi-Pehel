import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
// import './App.css'
import Events from "./components/Events"
export default function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route
      path ="/"
      element={
        <HomePage/>
      }
     />
      <Route
      path ="/event"
      element={
        <Events/>
      }
     />
     </Routes>
     </BrowserRouter>
    </>
  )
}