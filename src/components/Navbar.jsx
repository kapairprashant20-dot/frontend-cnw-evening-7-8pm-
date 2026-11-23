import { Link, NavLink } from "react-router-dom"
import { Navlink } from "../constant/Navlink"
import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-1 border-b border-gray-300 big-white bg-green-500">
      <div className="flex justify-between items-center p-2">
        <NavLink className="flex justify-center items-center gap-4">
          <img src="/profiling.jpeg" alt="Prashant Kapair" className="h-10 w-5.5" />
          <h1>Prashant Kapair</h1>
        </NavLink>
        <button className="sm:hidden relative left-20 text-x1 border border-gray-300 p-2" onClick={() => setOpen(!open)}>{open ? 
          <HiOutlineX /> : <HiOutlineMenu />}</button>
        <nav>
          <ul className="gap-10 items-center relative right-20 font-semibold hidden sm:flex">
            {
              Navlink.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </li>
              )
              )

            }
          </ul>
        </nav>
      </div>
      {
        open &&

        <ul className="sm:hidden space-y-2 absolute left-0 top-14
        bg-gray-300 text gary-800 w-full pt-4">
            {
              Navlink.map((link) => (
                <li key={link.id} className="px-8 py-3">
                  <Link to={link.path} onClick={()=> setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
              )

            }
          </ul>
      }
    </header>
  )
}

export default Navbar