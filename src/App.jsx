// src/App.jsx

import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

const App = () => (
  <div>
    <Navbar />
    <Box sx={{ mt: 6, p: 6 }}>
      <Outlet />
    </Box>
  </div>
);

export default App;
