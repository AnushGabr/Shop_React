import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
      <nav className='Header'>
        <NavLink to= '/'>Home</NavLink>
        <NavLink to= '/about'>About</NavLink>
        <NavLink to= '/contact'>Contact</NavLink>
    </nav>
    
  )
}

export default Header