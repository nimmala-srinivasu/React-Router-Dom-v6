import { Route, Routes, Link } from "react-router-dom";
import Application from "./components/TabApp";
import Home from "./components/Home";
import Album from "./components/Album";
import AlbumList from "./components/AlbumList";
import NotFound from "./components/NotFound";
import AlbumLayout from "./components/AlbumLayout";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/tabapp">TabApp</Link>
        </button>
        <button>
          <Link to="/albums">Albums</Link>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabapp" element={<Application />} />
        <Route path="/albums" element={<AlbumLayout />}>
          <Route index element={<AlbumList />} />
          <Route path="/albums/:id" element={<Album />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
