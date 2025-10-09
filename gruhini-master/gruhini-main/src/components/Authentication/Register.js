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
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../data/auth';
import '../../style/GetStarted.css';

const Register = () => {

    //firebase begin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setconfPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const { signUp, userDoc } = useAuthContext();
  const navigate = useNavigate();
//   const { signUp, userDoc } = useAuthContext();
   
  const handleSubmit = async (e) => {
  
    e.preventDefault();
    setError("");
    if(password!==confpassword){
      return setError("Passwords do not match");
    }
    try{
      await signUp(email, password).then(
        (value)=>{
          userDoc(email,name,loc, value);
        }
      )
      navigate("/empower");
    }
    catch(error){
      setError(error.message);
    }
  }
  //firebase end


//mui start
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [values2, setValues2] = useState({
    amount: '',
    confirm_password: '',
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
    const handleChange2 = (prop) => (event) => {
      setValues2({ ...values2, [prop]: event.target.value });
    };

    const handleClickShowPassword2 = () => {
      setValues2({
        ...values2,
        showPassword: !values2.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
//mui end

    return ( 
        <form style={{ color: "var(--sec-color)" , backgroundColor:'white', textAlign:'center', width: '50vw' ,marginLeft : '25vw', marginTop:'30px', marginBottom:'40px'}} >
 
          <Typography variant='h4' sx={{fontSize:"30px"}} >
            Register
          </Typography>
          <div style={{marginTop: '20px'}}></div>
          {error && <Alert sx={{m:1}} severity="error">{error}</Alert>}
          <TextField fullWidth  id="standard-basic" label="Full Name" variant="standard"
          onChange={(e)=> setName(e.target.value) } />
          <TextField fullWidth sx={{ mt: 2 }} id="standard-basic" label="Location" variant="standard"
          onChange={(e)=> setLoc(e.target.value) } />
          <TextField fullWidth sx={{ mt: 2 }} id="standard-basic" label="E-mail" variant="standard" 
          onChange={(e)=> setEmail(e.target.value)}/>
          <FormControl sx={{ mt: 2 }} fullWidth variant="standard"
          onChange={(e)=> setPassword(e.target.value)}>
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
        <FormControl sx={{ mt: 2 }} fullWidth variant="standard" onChange={(e)=> setconfPassword(e.target.value)}>
          <InputLabel htmlFor="standard-adornment-password">Cofirm Password</InputLabel>
          <Input 
            id="standard-adornment-password"
            type={values2.showPassword ? 'text' : 'password'}
            value={values2.password}
            onChange={handleChange2('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values2.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
         
            <Button
              className='CTC1'
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              sx={{ width:"20vw" }}
            >
              Register
            </Button>
     
        <Typography sx={{mt:3}} fontSize={16} variant='h6'>Already have an account? <Link to={"/login"} variant="body2">
          {'Login'}
        </Link>
        <br /><Link to={"/"} variant="body2">
          {'Back to home'}
        </Link> 
        </Typography>
           
        </form>
     );
}
 
export default Register;