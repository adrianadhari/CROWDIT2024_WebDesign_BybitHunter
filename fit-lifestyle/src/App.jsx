import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/Article/ArticleDetail";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/article" element={<Article />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
