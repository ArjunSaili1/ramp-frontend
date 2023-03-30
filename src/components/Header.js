import { AppBar, Button, Toolbar, Typography, Grid, Link, IconButton, Menu, MenuItem} from '@mui/material'
import { Container } from '@mui/system'
import {RampRight, AccountCircle} from '@mui/icons-material'
import { useNavigate } from 'react-router'
import React, {useEffect, useState} from 'react'

export default function Header() {
    const navigate = useNavigate()
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false)
    const menuStatus = Boolean(menuAnchor);

    const handleOpen = (event) => {
      setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
      setMenuAnchor(null);
    };

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/")
        navigate(0)
    }

    useEffect(()=>{
        console.log(localStorage.getItem("profile_url"))
        if(localStorage.getItem("profile_url")){
            setLoggedIn(true)
        }
    },[])
    return (
        <>
        <AppBar position="static" sx={{py: 1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <RampRight sx={{fontSize: 45}}/>
                    <Typography variant={"h4"} noWrap component="a" href="/"
                    sx={{ flexGrow: 1, display: { xs: 'none', 
                    sm: 'block', textDecoration: 'none', 
                    color: 'inherit'} }}>Ramp</Typography>
                    <IconButton></IconButton>
                    <IconButton color="inherit" onClick={handleOpen} 
                    aria-controls={menuStatus ? 'account-menu' : undefined}
                    aria-haspopup="true" aria-expanded={menuStatus ? 'true' : undefined}>
                        <AccountCircle fontSize="large"/>
                    </IconButton>
                    <Menu         
                    id="account-menu"
                    anchorEl={menuAnchor}
                    open={menuStatus}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}>
                        { loggedIn && !localStorage.getItem("user_type") == "recruiter"  ?
                            <MenuItem onClick={()=> navigate('/all-seekers')}>Avaliable Hires</MenuItem>
                            :
                            loggedIn && localStorage.getItem("user_type") == "seeker" ?
                            <MenuItem onClick={()=> navigate('/all-seekers')}>My Profile</MenuItem>
                            :
                            ""
                        }
                        {
                            loggedIn ? 
                            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                            :
                            <MenuItem onClick={()=> navigate('/login')}>Join Ramp</MenuItem>
                        }
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}
