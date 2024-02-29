import { Box, Button, TextField, Typography } from "@material-ui/core";
import "./login.css"
import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react";




const Login = ()=>{


   
     let history=useNavigate;
     

    const [isSginUp, setIsSignup]= useState(false);
    const [inputs, setInputs] = useState({
        name:"", 
        email:"", 
        password:""

    })

    const handleChange=(e)=>{
       
       setInputs ({...inputs,[e.target.name]: e.target.value});


        
    };

    const handleSubmit = (e)=>
        {
            e.preventDefault();
            const sendData= {
                name:inputs.name,
                email:inputs.email,
                password:inputs.email
            }

             console.log(inputs);
             axios.post("http://localhost/react/connection.php",sendData)
             .then((result) =>  {
                if(result.inputs.Status === 'invalid')
                {
                    alert('invalid');
                }
                else
                {
               history('/dashboard');
                }
             })

        } ;
        const resetState= ()=>{
            setIsSignup(!isSginUp);
            setInputs({name:"",email:"",password:""})
        }
    return <div>
  
    <form onSubmit={handleSubmit}>
    
     <Box className="show">

        <Typography variant="h3" className="khan"> {isSginUp ? "Sign Up" : "Login"} </Typography>
        {        
        isSginUp && (<TextField value={inputs.name} onChange={handleChange} name="name"  margin="normal" type="text" className="write" placeholder="Name"/>
        )}   <TextField value={inputs.email} onChange={handleChange}  name="email" margin="normal"  type="email" className="write" placeholder="Email"/>
         <TextField value={inputs.password} onChange={handleChange}  name="password" margin="normal"  type="password" className="write" placeholder="Password"/>
         <br />
        {   isSginUp ? <Button type="submit"  className="bt" variant="contained" color="primary" sx={{borderRadius:3}} >SignUp </Button> : <Button type="submit" className="bt" variant="contained" color="primary" sx={{borderRadius:3}} >Login </Button>
        }           <br />
           <br />
           <Button className="bt" onClick={resetState}  > {isSginUp ? "login" : "Sign Up"}</Button>

     </Box>

    </form>
  
     
    </div>
}


export default Login;