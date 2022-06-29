import {
  TextField,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { registerUser } from "../redux/LoginRegister/loginRegisterSlice";
import {useNavigate} from 'react-router-dom';
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const canSave =
    [email, password, cpassword].every(Boolean) &&
    password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&
    password.length >= 8 &&
    password === cpassword &&
    email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  const register = () => {
    console.log("Here");
    dispatch(registerUser(email, password));
    Swal.fire({
      title:'Succes',
      text:'Successfully Registered'
    })
    navigate('/login')
  };
  return (
    <Container align="center">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Paper sx={{ mt: "3rem", p: "2rem" }} elevation={10}>
            <Typography variant="h5" sx={{ mb: "2rem" }}>
              Register
            </Typography>

            <form>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                sx={{ width: "60%" }}
                margin="dense"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                sx={{ width: "60%" }}
                margin="dense"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText="8 char long and must contain one letter and alphabet each"
              />
              <TextField
                id="cpassword"
                label="Confirm Password"
                variant="outlined"
                sx={{ width: "60%" }}
                margin="dense"
                type="password"
                required
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                helperText="Same as Password"
              />

              <Button
                variant="contained"
                fullWidth
                margin="dense"
                sx={{ mt: "1rem", width: "60%" }}
                disabled={!canSave}
                type="button"
                onClick={register}
              >
                Register
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
