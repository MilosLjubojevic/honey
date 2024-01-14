import { Link } from "react-router-dom";
import Logo from "../images/logofbmed.jpg";
function NavBar() {
  return (
    <>
      <nav className="bg-orange-300 mx-0 px-0 overflow-hidden h-16  ">
        <ul>
          <li className="hover:bg-orange-500 float-right mr-6 mt-6">
            <Link to="/">Pocetna</Link>
          </li>
          <li className="hover:bg-orange-500 float-right mx-6 mt-6">
            <Link to="Proizvodi">Proizvodi</Link>
          </li>
          <li className="hover:bg-orange-500 float-right mt-6">
            <Link to="OpisSajta">O Nama</Link>
          </li>
          <li className="hover:bg-orange-500 float-right mt-6 mr-6">
            <Link to="Korpa">Korpa</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
