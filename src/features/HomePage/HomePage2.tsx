import * as React from 'react';
import NavBar from "../NavBar/NavBar"
import OrgList from "../OrgList/OrgList"
import FilterBar from "../FilterBar/FilterBar";
import Grid from '@mui/material/Grid';



const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={6} marginLeft={4} marginRight={4}>
                <Grid item xs={3} marginLeft={4}>
                    <FilterBar />
                </Grid>
                <Grid item xs={8}>
                    <OrgList />
                </Grid>
            </Grid>
        </>
    )

}


export default HomePage