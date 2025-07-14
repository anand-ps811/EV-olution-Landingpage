import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // ✅ Import the hook

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Use the hook inside your component

  return (
    <div className='nav'>
      <div className='nav-logo'>EV-olution</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <button onClick={() => navigate('/thanks')}>
          <li className='nav-contact'>Contact</li>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
