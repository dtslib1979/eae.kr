import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryIndex from './pages/CategoryIndex';
import Category from './pages/Category';
import Post from './pages/Post';
import Archive from './pages/Archive';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<CategoryIndex />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="category/:slug/:postSlug" element={<Post />} />
          <Route path="archive" element={<Archive />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
