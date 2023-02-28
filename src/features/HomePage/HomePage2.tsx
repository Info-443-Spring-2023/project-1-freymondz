import * as React from 'react';
import NavBar from "../NavBar/NavBar"
import OrgList from "../Positions/PositionList"
import FilterBar from "../FilterBar/FilterBar";
import Grid from '@mui/material/Grid';
import UserDataDialog from '../UserDataDialog/UserDataDialog';
import Footer from '../NavBar/Footer';



const HomePage: React.FC = () => {
    return (
        <>
            <UserDataDialog />
            <NavBar />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={6} marginLeft={4} marginRight={4} paddingBottom={6}>
                <Grid item xs={3} marginLeft={4}>
                    <FilterBar />
                </Grid>
                <Grid item xs={8}>
                    <OrgList />
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    )

}


export default HomePage