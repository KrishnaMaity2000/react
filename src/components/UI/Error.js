
import React from 'react';
import classes from './Error.css';
import Card from './Card';
import Button from './Button';

const Error = (props)=>{
  return(
    <div> 
    <div className={classes.backdrop} onClick={props.onConfirm} />
         <Card clasName={classes.modal}>
           <header className={classes.header}>
           <h2>{props.title}</h2>
           </header>
           <div className={classes.content}>
            <p>{props.message}</p>
           </div>
           <footer className={classes.actions}>
            <Button onClick ={props.onConfirm}>OKAY</Button>
           </footer>
         </Card>
    </div>
  )
}
export default Error;