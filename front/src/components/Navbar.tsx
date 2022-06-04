import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
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
          <Link to='/signout'>
            <FontAwesomeIcon icon={solid("right-from-bracket")} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
