import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardUtils from './utils/DashboardUtils';
import Animation from './pages/animation/Animation';
import Blank from './pages/blank/Blank';
import Border from './pages/border/Border';
import ButtonsPage from './pages/buttons/ButtonsPage';
import CardsPage from './pages/cards/CardsPage';
import ChartPage from './pages/chart/ChartPage';
import ColorPage from './pages/color/ColorPage';
import Dashboard from './pages/dashboard/Dashboard';
import Error from './pages/error/Error';
import Forgot from './pages/forgot/Forgot';
import Login from './pages/login/Login';
import Others from './pages/others/Others';
import Register from './pages/register/Register';
import Table from './pages/tables/Table';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardUtils />}>
          <Route index element={<Dashboard />} />
          <Route path="/Blank" element={<Blank />} />
          <Route path="/Buttons" element={<ButtonsPage />} />
          <Route path="/Cards" element={<CardsPage />} />
          <Route path="/Charts" element={<ChartPage />} />
          <Route path="/Animations" element={<Animation />} />
          <Route path="/Borders" element={<Border />} />
          <Route path="/Colors" element={<ColorPage />} />
          <Route path="/Others" element={<Others />} />
          <Route path="/Table" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Password-Reset" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
