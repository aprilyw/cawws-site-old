import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import cawwlogo from '../img/caww-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super()
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={cawwlogo} alt="CAWW" style={{ width: '2rem', height: '2rem' }} />
            </Link>
            <Link to="/" className="navbar-item" title="Logo-text">
              Chicago Asian Writer's Workshop
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/latest">
                Latest
              </Link>
              <Link className="navbar-item" to="/issues">
                Issues
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/donate">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
