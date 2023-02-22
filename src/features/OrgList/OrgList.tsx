import OrgListItem from "./OrgListItem"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const OrgList: React.FC = () => {
    return (
        <>
            <h3>Organization List:</h3>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 800,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#374785' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                {/* TODO: do some sort of mapping here over the list of organizations in our DB */}
                <OrgListItem />
                </Grid>
            </Paper>
        </>
    )
}

export default OrgList

