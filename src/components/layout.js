import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  fixedNavbar,
  navLinks,
  navLinkItem,
  navLinkText,
  mainContent
} from './layout.module.css' 
import Logo from '../assets/logo.svg'

const Layout = ({ children }) => {
  return (
    <main className={container}>
      {/* <title>{pageTitle}</title> */}
      <nav className={fixedNavbar}>
        <Logo />
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
        </ul>
      </nav>
      <div className={mainContent}>
        {children}
      </div>
      <footer>
        social and copyright
      </footer>
    </main>
  )
}

export default Layout