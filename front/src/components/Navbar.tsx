import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action-creators";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state.auth.accessToken);

  const handleLogOut = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return (
      <nav className='navbar'>
        <h1>
          Buy<span className='purple'>It</span>
        </h1>
        <ul className='links'>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className='navbar'>
      <h1>
        Buy<span className='purple'>It</span>
      </h1>
      <ul className='links'>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={solid("home")} />
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <FontAwesomeIcon icon={solid("bag-shopping")} />
          </Link>
        </li>
        <li>
          <Link to='/orders'>
            <FontAwesomeIcon icon={solid("truck-fast")} />
          </Link>
        </li>
        <li>
          <a href='' onClick={handleLogOut}>
            <FontAwesomeIcon icon={solid("right-from-bracket")} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
