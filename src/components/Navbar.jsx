// src/components/Navbar.jsx


import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

// Custom Link component that works with both MUI Button and TanStack Router
const Link = React.forwardRef(({ to, ...props }, ref) => (
    <RouterLink to={to} {...props} ref={ref} />
));

const Navbar = () => (
    <AppBar>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My App
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/posts">Posts</Button>
        </Toolbar>
    </AppBar>
);

export default Navbar;
