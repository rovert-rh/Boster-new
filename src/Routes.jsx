import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import HomePage from "./pages/Home"
import LogViewsPage from "./pages/LogViewsPage"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/RegisterPage"
import ComunicadosPage from "./pages/ComunicadosPage"
import MatchPage from "./pages/MatchPage"

const AppRoutes = () => {
    return (
        <Router>
      <Routes>
                <Route path="/" element={<HomePage  />} />
                <Route path="/viewRegister" element={<LogViewsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/match" element={<MatchPage />} />
                <Route path="/comunicados" element={<ComunicadosPage />} />
        </Routes>
    </Router>

    )
}
export default AppRoutes;