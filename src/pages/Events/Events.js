import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styles from "./Events.module.css"

  




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Events() {
  return (
    <div className={`${styles.mb}`}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid xs={12} sm={12} md={4} >
            <Item className={`${styles.crd}`}>
                <div className={`${styles.title}`}>Codex</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Eget sit amet tellus cras 
                </div>
                <div>
                    Venue: online
                    Time: 5pm
                    Date: 2/30/2023
                </div>
            </Item>
            </Grid>
            <Grid xs={12} sm={12} md={4}>
            <Item className={`${styles.crd}`}>xs=6</Item>
            </Grid>
            <Grid xs={12} sm={12} md={4}>
            <Item className={`${styles.crd}`}>xsa</Item>
            </Grid>
        </Grid>
        </Box>
    </div>
   
  );
}

  export default Events;
