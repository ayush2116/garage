import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navigate } from 'react-router-dom';
const theme = createTheme();

export default function SignIn() {

  


  // eslint-disable-next-line no-self-compare
  // const [selectedTime, setselectedTime] = useState<Date | null>(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

const [entry, setentry] = React.useState(dayjs('2020-01-01 12:00'));
const [exit, setexit] = React.useState(dayjs('2020-01-01 12:00'));


const [name, setname] = React.useState(null);
const [vehicleNo, setvehicleNo] = React.useState(null);
const [allvehicle, setallvehicle] = React.useState([]);

const onnameChange = (e) =>{
   
    setname(e.target.value);

}
const onnumberChange = (e) =>{
  
  setvehicleNo(e.target.value);
  
}
const onregister = (e) =>{
  let temp = []
  temp.push({name: name, vehNum: vehicleNo, entryTime: entry, exitTime: exit})
  setallvehicle(allvehicle.push({name: name, vehNum: vehicleNo, entryTime: entry, exitTime: exit}))
  
  };

  React.useEffect(() => {
    console.log(allvehicle)
    debugger;
  }, [allvehicle])
  
const handleChangee = (newValue) =>{
  const temp = newValue
  
  
  setentry(newValue.$d)

}
  const handleChange = (newValue) => {
    setexit(newValue.$d);
  };

  const [goTo, setgoTo] = React.useState(false);

  if (goTo) {
    return <Navigate to="/garage" />;
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            USER
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField id="outlined-basic" label="Customer Name" variant="outlined" fullWidth onChange={onnameChange} />
          <TextField id="outlined-basic" label="Vehicle Number" variant="outlined" fullWidth margin="normal"
              required
               inputProps={{style: {textTransform: 'uppercase'}}} onChange={onnumberChange} />
           
        <Box sx={{
            marginTop:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack spacing={3} sx={{width:'400px'}} direction="row">
<TimePicker
          label="Checkin Time"
          value={entry}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Checkout Time"
          value={exit}
          onChange={handleChangee}
          renderInput={(params) => <TextField {...params} />}
        />
</Stack>
</LocalizationProvider>

</Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            // onClick={()=>{setgoTo(true)}}
            onClick={onregister}
            >
             Register 
            </Button>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            
            >
             Check Availability 
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}