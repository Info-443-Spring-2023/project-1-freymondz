import { useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { RootState } from "../../store"
import { selectOrgId, setOrgId } from "./OrgsSlice"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

//TODO: rename this to positionListItem
const OrgListItem: React.FC = () => {

    const firebase = useFirebase()
    // const organizationsFromFirebase = useSelector((state: RootState) => state.firebase.data.organization)
    // when you click this, you set the organization id to equal the queried firebase db's organization id.
    const onClick = () => {
        // Object.keys(organizationsFromFirebase).forEach(() => {
        //     //go into "organizations" from Firebase
        //     //try to match the organization.name == 
        // })
    }
    return (
        <>
            <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="Org Image" src="/static/images/grid/complex.jpg" /> 
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Position Title
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Organization Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Click to show more info
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        Rating: 5 stars
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default OrgListItem