import { Navigation } from "./components/Navigation";

import { Routes, Route } from "react-router-dom";

import { HomeView } from "./views/HomeView";
import { PostsView } from "./views/PostsView";
import { UsersView } from "./views/UsersView";
import { UserDetailsView } from "./views/UserDetailsView";

import { FourOhFourView } from "./views/FourOhFourView";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/users" element={<UsersView />} />
        <Route path="/users/:id" element={<UserDetailsView />} />
        <Route path="/posts" element={<PostsView />} />
        <Route path="*" element={<FourOhFourView />} />
      </Routes>
    </div>
  );
}

export default App;
