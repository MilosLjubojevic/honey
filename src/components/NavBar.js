import { Link } from "react-router-dom";
import "../NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="bg-orange-300 mx-0 px-0 overflow-hidden   ">
        <ul>
          <li className="hover:bg-orange-500 float-right mr-6">
            <Link to="/">Pocetna</Link>
          </li>
          <li className="hover:bg-orange-500 float-right mx-10">
            <Link to="/Proizvodi">Proizvodi</Link>
          </li>
          <li className="hover:bg-orange-500 float-right ">
            <Link to="OpisSajta">O Nama</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
