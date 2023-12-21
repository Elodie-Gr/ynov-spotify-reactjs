import { createBrowserRouter } from "react-router-dom";
import Playlists from "../screens/Playlists";
import Home from "../screens/Spotify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/playlists/:playlistId",
    element: <Playlists />
  }
]);

export default router;