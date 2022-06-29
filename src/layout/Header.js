import { Box,AppBar,Toolbar,Typography,Button } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
const Header = () => {
    let title;
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        navigate('/login')
    }
    if(localStorage.getItem('token')){
        title= (<Button color="inherit" ><Link to="/" style={{color:'white',textDecoration:'none'}} onClick={logout}>Logout</Link></Button>)
    }
    else{
        title=<><Button color="inherit" ><Link to="/" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
        <Button color="inherit"><Link to="/register" style={{color:'white',textDecoration:'none'}}>Register</Link></Button></>
    }
  return (
    
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OKhati
          </Typography>
         {title}
        </Toolbar>
      </AppBar>
  
  )
}

export default Header