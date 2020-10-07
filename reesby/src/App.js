import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import Button from '@material-ui/core/Button';
import Search from './components/Search';
import { fade,makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


require("es6-promise").polyfill();
require("isomorphic-fetch");


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  button: {
  height: 40,
  padding: theme.spacing(2),
  textAlign: 'center',
   //width: 150,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  //Meterial Ui grid variables
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  useEffect(() => {
 
  fetch("http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby?api_key=b7c58b")
    .then ((response )=> response.json())
    .then((json) => setData(json));

  
  }, 
  
  []);

  

  return (


    <div className={classes.root}>
      <Grid container spacing={1}>

         <Grid item xs={9} sm={10}>
           <h2>Clients</h2>
         </Grid>
     
         <Grid item xs={3} sm={2}>
           <Button variant="outlined" className={classes.button}>+ NEW CLIENT</Button>
         </Grid>
  
         <Grid item xs={4} sm={5}>
           <Search/>
         </Grid>
      
        <Grid item xs={3} sm={2}>
           <Button variant="outlined">Search</Button>
        </Grid>

        <Grid item xs={2} sm={3}>
           <Button variant="outlined">Clear</Button>
        </Grid>

         <Grid item xs={3} sm={2}>
           <Button variant="outlined" className={classes.button} >SHOW FILTERS</Button>
         </Grid>
       
         <Grid item xs={12} sm={12}>
         <Datatable data ={data}/>
         </Grid>
       
     
     
    </Grid>
  </div>

    


    
    
  );
}

export default App;
