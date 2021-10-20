import * as React from `react`
import { Link } from `gatsby`
import {
  container,
  fixedNavbar,
  navLinks,
  navLinkItem,
  navLinkText,
  mainContent,
  footer,
  social
} from `./layout.module.css` 
import Logo from `../assets/logo.svg`
import Facebook from `../assets/facebook.svg`
import Instagram from `../assets/instagram.svg`
import Linkedin from `../assets/linkedin.svg`
import Twitter from `../assets/twitter.svg`

const Layout = ({ children }) => {
  return (
    <main className={container}>
      {/* <title>{pageTitle}</title> */}
      <nav className={fixedNavbar}>
        <Link to="/">
          <Logo />
        </Link>        
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={mainContent}>
        {children}
      </div>
      <footer className={footer}>
        <div>Copyright</div>
        <div className={social}>
         <a href="https://github.com/marketaanezka">
           <Twitter />
         </a> 
         <a href="https://github.com/marketaanezka">
          <Facebook />
         </a>
          <a href="https://github.com/marketaanezka">
          <Linkedin />
          </a>
          <a href="https://github.com/marketaanezka">
          <Instagram />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Layout