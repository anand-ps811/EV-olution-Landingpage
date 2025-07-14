import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>EV-olution</div>
        <ul className='nav-menu'>
            <a href="/thanks"><li>Home</li></ul></a>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul>

    </div>
  )
}
export default Navbar;
