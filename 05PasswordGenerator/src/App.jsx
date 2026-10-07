// import { useState,useCallback } from 'react'

// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [password, setPassword] = useState('')
//   const [isNumberallowed,setIsNumberAllowed] = useState(false)
//   const [isSpecialCharAllowed,setIsSpecialCharAllowed] = useState(false)
  
 
//    function generatePassword(value) {
//     setLength((prevLength) => {
//       return value
//     }) 

//     // console.log(length)

//    let newPassword = ''
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    
//     const specialCharacters = '!@#$%^&*()-+'

    
//     for (let i = 0; i < value; i++) {
//       newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
      
//     }
  
//     setPassword((prevPassword) => {
//       return newPassword
//     })
//     console.log(newPassword)
//   }

//   return (
//     <>
//     <h1>Password Generator</h1>
//     <div className="container">
//       <input type="text" value={password} readOnly />
//       <br></br>
//       <input
//   type="range"
//   min="8"
//   max="20"
//   className="w-32 accent-blue-500"
//   onChange={(e) => {
//     generatePassword(e.target.value)
//     console.log(e.target.value)
//   }}

// />
//  <p>length: {length}</p>

//  <input type="checkbox" id="includeNumbers" onChange={(e) => {
//    console.log(e.target.checked)
//  }} />
//  <label htmlFor="includeNumbers">Include Numbers</label>

//     </div>
//     </>
//   )
// }

// export default App


import { useState,useCallback, useEffect } from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [isNumberallowed,setIsNumberAllowed] = useState(false)
  const [isSpecialCharAllowed,setIsSpecialCharAllowed] = useState(false)

  //use Ref 
  const passwordRef = useRef(null);
  
  const generatePassword = useCallback(() => {
  
    let pass = ''

    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if (isNumberallowed) {
      string += '0123456789'
    }
    if (isSpecialCharAllowed) {
      string += '!@#$%^&*()-+'
    }
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length)
      pass += string[randomIndex]
    }

    setPassword(pass)


  }, [length, isNumberallowed, isSpecialCharAllowed, setPassword]);

  useEffect(() => {
    generatePassword()
    console.log('Password generated:', password)
  }, [length, isNumberallowed, isSpecialCharAllowed]);

  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md bg-gray-700 rounded-lg shadow px-4 py-3 my-8 text-orange-500 ">
    <h1 className="text-white text-center ">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        readOnly
        className=" focus:outline-none w-full px-3 mt-2 py-1 text-orange-500 bg-white  placeholder-gray-400"
        placeholder="Your password will appear here"
      />
      <button className=" outline-none bg-blue-500 hover:bg-blue-700 text-white  
      py-0.5 px-3 shrink-0 ">
        COPY
      </button>
    </div>
    <div className="flex text-sm gap-x-2 ">
      <div className="flex items-center gap-x-12">
      
        <input
          type="range"
          min={8}
          max={50}
          className="curesor-pointer accent-blue-500"
          value={length}
          onChange={(e) => {setLength(e.target.value); }}
          />
          <label htmlFor="length" className="text-white">
            Length: {length}
          </label>

      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
              defaultChecked={isNumberallowed}
              id='numberInput'
              onChange={()=>{
                setIsNumberAllowed((prev)=>!prev)
              }}
         />
         <label htmlFor="numberInput" className="text-white">
          Include Numbers
         </label>
        </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
              defaultChecked={isSpecialCharAllowed}
              id='specialCharInput'
              onChange={()=>{
                setIsSpecialCharAllowed((prev)=>!prev)
              }}
         />
         <label htmlFor="specialCharInput" className="text-white">
          Include Special Characters
         </label>
        </div>
      
      </div>
      </div>
    </>
  )
}

export default App