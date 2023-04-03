import { Route, Routes } from "react-router-dom"
import AppRoutes from "./auth/router/AppRoutes"
import JournalRoutes from "./journal/router/JournalRoutes"

const AppRouter = () => {
  return (
    <Routes>
        //Login y registros
        <Route path="/auth/*" element={<AppRoutes/>}/>
        //Aplicación 
        <Route path="/*" element={<JournalRoutes/>}/>        
    </Routes>
  )
}

export default AppRouter

