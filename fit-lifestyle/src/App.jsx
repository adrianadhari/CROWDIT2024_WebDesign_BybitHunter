import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/Article/ArticleDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/article" Component={Article} />
        <Route path="/article/:slug" Component={ArticleDetail} />
      </Routes>
    </>
  );
}

export default App;
