import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
  < UserContextProvider>
  <h1>Chai and Code</h1>
    <Login></Login>
    <Profile></Profile>
   </ UserContextProvider>
  
  
  )
}

export default App
