import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Host/Dashboard/Dashboard';
import Income from './pages/Host/Income/Income';
import Reviews from './pages/Host/Reviews/Reviews';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
