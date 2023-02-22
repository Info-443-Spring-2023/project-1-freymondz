import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const FilterBar: React.FC = () => {
    return (
        <>
        <h1></h1>
        <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 800,
                    height:'auto',
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#374785' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                {/* TODO: list out filters */}
                <h1>Filters</h1>
                </Grid>
            </Paper>
        </>
    )
}

export default FilterBar