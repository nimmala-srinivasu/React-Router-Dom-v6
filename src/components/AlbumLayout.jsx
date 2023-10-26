import { Link, Outlet } from "react-router-dom";
function AlbumLayout() {
  return (
    <>
      <nav>
        <button>
          <Link to="/albums/4">Album 4</Link>
        </button>
        <button>
          <Link to="/albums/5">Album 5</Link>
        </button>
      </nav>
      <Outlet />
    </>
  );
}
export default AlbumLayout;
