
import  { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.css';
import Error from '../UI/Error';

const AddUser=(props)=>{

    const[inputs,setInputs]=useState("");
    const[age,setAge]= useState('');
    const[error,setError] = useState();

    const handleSubmit= (event)=>{
        event.preventDefault();
        if( inputs.trim().length === 0 || inputs.trim().length === 0){
          setError({
            title:"invalid input",
            message:"enter a valid name"

          })
        }
        if(+age < 1){
          setError({
            title:"invalid age",
            message:"enter a valid  age (age > 0)"
          })
        }
        // if (typeof props.onAddUser === 'function'){
          props.onAddUser(inputs, age);
          setInputs('');
         setAge('');
   
    }

    const  handleChangeUser = event=>{
           setInputs(event.target.value)
    }
    function handleChangeAge (event) {
        setAge(event.target.value);
    }
    const errorHandler = ()=>{
      setError(null);
    }

    // const handleChange = (event)=>{
    //     const name= event.target.name;
    //     const value= event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }
    
  return(
    <div> 
   
    
    {error && <Error title = {error.title} message={error.message} onConfirm={errorHandler}/>} 
    <Card className={classes.input}>
       <form onSubmit={handleSubmit}>
      <label htmlFor='age'>Enter your name: </label>
      <input id='username'
        type="text" 
         value={inputs}
        // value={inputs.username || ""} 
        onChange={handleChangeUser}
        placeholder="Enter username"
      />
      
      <label htmlFor='age'>Enter your age:
        <input id='age'
          type="number" 
          value={age} 
        //   value={inputs.age || ""} 
          onChange={handleChangeAge}
          placeholder="Enter age"
        />
        </label>
        <Button type="submit" >Add-User</Button>
    </form>
    </Card>
   </div>
    

  )
}
    
export default AddUser;