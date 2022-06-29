import {
  TextField,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { selectAllUsers } from "../redux/LoginRegister/loginRegisterSlice";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const user = useSelector(selectAllUsers);
  const login = () => {
    const auth = user.find((u) => u.email === email && u.password === password);
    if (auth) {
      Swal.fire({
        title: "Succes",
        text: "Successfully Logged in",
      });
      localStorage.setItem('email',email)
      localStorage.setItem('token',Math.random().toString(36).substring(2,9))
      navigate("/home");
    } else {
      Swal.error({
        title: "Error",
        text: "SPassword and Email are incorrect",
      });
      navigate("/homepage");
    }
  };

  return (
    <Container align="center">
      <Grid container alignItems="center" justifyContent="center">
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
              />

              <Button
                variant="contained"
                fullWidth
                margin="dense"
                sx={{ mt: "1rem", width: "60%" }}
                type="button"
                onClick={login}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
