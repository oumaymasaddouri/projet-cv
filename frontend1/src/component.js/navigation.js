import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    Navigate("/");
    window.location.reload();
  };

  return (
    <nav className='navbar navbar-light bg-light border-bottom d-flex justify-content-between'>
      <div className='container-fluid'>
        <Link style={{ textDecoration: "none" }} to='/home'>
          <span className='navbar-brand'>cv</span>
        </Link>

        <button
          className='btn btn-outline-success'
          type='submit'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
