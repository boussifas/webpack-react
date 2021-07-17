import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import wizard from "./wizard"

var axios = require("axios").default;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "#d4d4d6",
    },
    gridList: {
       margin: 10,
       paddingTop: 20
    },
    gridListTile: {
      width: 75,
      height: 75,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
      width: 50,
      height: 50
    }

  }),
);
function App() {
  const classes = useStyles();

  const [data, setData]= useState([]);

  useEffect(async () => {
    
    const result = await axios(
      'https://static.coinpaper.io/api/coins.json',
    );
    setData(result.data);
    console.log(typeof(result.data))
  });


  return (
    <div>
      <header></header>
      <div className={classes.root}>
      <GridList  cols={4}>
        <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {data.slice(0,50).map((item) => (
          <GridListTile key={item.id}>
            <img src={item.image} alt={item.name} className={classes.root}/>
            <GridListTileBar
              title={item.name}
              subtitle={<span>{item.symbol} Rank: {item.rank}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList> 
  
    </div>
    </div>
  );
}

export default App;
