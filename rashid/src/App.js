import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import News from "./components/news/news";
import Music from "./components/music/music";
import Setting from "./components/setting/setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
        <Header />
        <div className="flex_block">
          <Aside />
          <div className="main-content">
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs/*" element={<Dialogs/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/setting" element={<Setting/>}/>
          </Routes>
          </div>
    
        </div>
      </div>
    </div></BrowserRouter>
  );
};

export default App;
