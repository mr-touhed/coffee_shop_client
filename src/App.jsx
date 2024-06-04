import { RouterProvider, } from "react-router-dom"
import router from "./routes/routes"
import RootLayout from "./layout/RootLayout"



function App() {
  
  return (
    
    <RouterProvider router={router}>
      <RootLayout/>
    </RouterProvider>
    
  )
}

export default App
