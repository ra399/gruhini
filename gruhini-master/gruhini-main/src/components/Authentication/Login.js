import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useAuthContext } from '../../data/auth';
import { useNavigate } from 'react-router-dom';
import '../../style/GetStarted.css';

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
          await logIn(email, password);
          navigate("/empower");
        }
        catch(error){
          setError(error.message);
        }
      }
      
    //mui start
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
  
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
  
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  
      //mui end

    return ( 
        <form style={{ color: "var(--sec-color)" , backgroundColor:'white', textAlign:'center', width: '50vw' ,marginLeft : '25vw', marginTop:'40px'}} >
      
      <div style={{display:'inline'}}>
        <Typography variant='h4' sx={{fontSize:"30px",mb:3}} >
          Log in
        </Typography>
      </div>

      {error && <Alert sx={{m:1}} severity="error">{error}</Alert>}
      <div style={{marginTop: '20px'}}></div>
      <TextField sx={{ input: { color: 'var(--sec-color)' }}}  className='textField' fullWidth  id="standard-basic" label="E-mail" variant="standard"
      onChange={(e)=> setEmail(e.target.value)} />
      <FormControl fullWidth variant="standard" sx={{ mt: 2 }} onChange={(e)=> setPassword(e.target.value)}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input 
        id="standard-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <Typography variant='h6' fontSize={14} align='left' sx={{mt:3 , left:"0px"}}>
    Forgot password? <Link to={"/forgotpassword"} variant="body2" sx={{color:'--txt-color'}}>
              {"Click here to reset "}
            </Link>
          </Typography>
        <Button 
        className='CTC1'
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{ width:"20vw" }}
        >
          Log In
        </Button>
        <Typography sx={{mt:3}} fontSize={16} variant='h6'>Don't have an account? <br /><Link to={"/register"} variant="body2">
          {'Register here'}
        </Link>
        <br /><Link to={"/"} variant="body2">
          {'Back to home'}
        </Link></Typography>  
        </form>
     );
}
 
export default Login;