import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="barralateral">
<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Home2">Home2</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/FormularioTrabajador">FormularioTrabajadores</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;