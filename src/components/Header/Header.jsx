import { useNavigate, Link } from "react-router-dom";
import { HeaderNav } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <HeaderNav>
        <h1 className="logo">Kenzie Hub</h1>
        <Link onClick={() => clearLocalStorage()} className="btn-logout" to="/">
          Sair
        </Link>
      </HeaderNav>
    </>
  );
};
