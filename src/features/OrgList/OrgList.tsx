import OrgListItem from "./OrgListItem"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

// TO:Do loop through all the positions 

const OrgList: React.FC = () => {
    return (
        <>
            <h3>Organization List:</h3>
            <OrgListItem />
        </>
    )
}

export default OrgList

