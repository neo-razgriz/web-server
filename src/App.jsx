import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SupplementPage from './pages/SupplementPage';

function App() {
  return (
    <Routes>
      {/* This is a nested route structure. 
        The "Layout" component will always be rendered.
        The child components (HomePage, SupplementsPage) will
        be rendered inside the Layout's <Outlet />
      */}
      <Route path="/" element={<Layout />}>
        {/* The "index" route is the default component for the parent path ("/") */}
        <Route index element={<HomePage />} />
        
        {/* This route renders at the path "/supplements" */}
        <Route path="supplements" element={<SupplementPage />} />
        
        {/* Example: <Route path="about" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;