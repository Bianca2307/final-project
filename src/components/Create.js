import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style';


export default function Create(){
  const classes = useStyles()
  return(
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
       Create a new note
      </Typography>

      <Button className = {classes.btn}
      onClick = {()=>console.log('you clicked me')}
      type="submit"
      color="secondary"
      variant="contained">
         submit

      </Button>
      

    </Container>
  )
}