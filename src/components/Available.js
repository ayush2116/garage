import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
// import { Button } from 'bootstrap';




const Available = () => {
  return (
    <>
    <Card sx={{ minWidth: 275, alignItems: 'center' , marginTop: 30,
            display: 'flex',
            flexDirection: 'column'}}>
    <CardContent>
      <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
       <h2>Successfully Registered </h2>
      </Typography>
      

     
    </CardContent>
    
  </Card>
  <div>
    
  </div>
    </>
  )
}

export default Available;