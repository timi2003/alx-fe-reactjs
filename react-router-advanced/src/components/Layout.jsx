import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Advanced React Router Demo</p>
      </footer>
    </div>
  )
}

export default Layout

