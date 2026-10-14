

import Card from './component/Card'
import ThemeBtn from './component/ThemeBtn'
import { ThemeProvider } from './context/theme'
import React from 'react'


function App() {
  const [themeMode , setThemeMode] = React.useState("light")

  const lighttheme = ()=>{
    setThemeMode("light")
  }

   const darktheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme

  React.useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")

        document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  

  return (
 
    
   
   <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
                        <div className="w-full">
                            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                              <ThemeBtn></ThemeBtn>
                            </div>

                            <div className="w-full max-w-sm mx-auto">
                              //card button
                              <Card></Card>
                            </div>
                        </div>
      </div>
   </ThemeProvider>

  )
}

export default App
