
import {Link} from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div>
         <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
    </div>
  )
}

export default Nav