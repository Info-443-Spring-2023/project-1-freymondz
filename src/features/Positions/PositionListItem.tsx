import { useSelector } from "react-redux"
import { FirebaseReducer, isLoaded, useFirebase, useFirebaseConnect } from "react-redux-firebase"
import { RootState } from "../../store"
import { selectPositionId, setPositionId } from "./PositionSlice"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import { Link } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InterestsIcon from '@mui/icons-material/Interests';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import { useAppSelector } from "../../hooks";
import { isEmpty } from "react-redux-firebase";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


// Note: these are passed in as props from the PositionList.tsx component, so you don't have to
//       query this from Firebase.
interface OrgListItemProps {
    accessibility: string,
    commitment: string,
    description: string,
    img: string,
    interest: string,
    link: string,
    location: string,
    min_age: number,
    name: string,
    //the organization name in Firebase
    organization: string,

}

const PositionListItem = ({ accessibility, commitment,
    description, img, interest, link, location, min_age, name,
    organization }: OrgListItemProps) => {

    const firebase = useFirebase()
    const auth = useAppSelector(state => state.firebase.auth)
    useFirebaseConnect({ path: `users/${auth.uid}` })
    const user = useAppSelector(state => state.firebase.data.users)
    const [color, setColor] = useState<boolean>(false)
    React.useEffect (() => {
        if (!isEmpty(auth) && isLoaded(auth) && !isEmpty(user) && isLoaded(user)) {
            // console.log(checkEquality(user, auth, organization, name) !== '')
            setColor(checkEquality(user, auth, organization, name) !== '')
        }
    }, [auth, user])
    // console.log(user)
    const onClick = () => {
        const keyToRemove = checkEquality(user, auth, organization, name)
        if (keyToRemove === '') {
            console.log("pushing")
            firebase.push(`users/${auth.uid}/bookmarks`, {organization: organization, name: name}).then(() => console.log("data upload successfully!"))
            .catch(err => console.log(err));
        } else {
            console.log("removing")
            firebase.remove(`users/${auth.uid}/bookmarks/${keyToRemove}`).then(() => console.log("data remove successfully!"))
            .catch(err => console.log(err));
        }
    }
    // console.log(!isEmpty(auth) && isLoaded(auth))
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // console.log(color)
    return (
        <Box paddingBottom={5}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 175, height:200 }}
                    image= {img}
                    alt="Org Cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                        title={name}
                        subheader={organization}
                        action= {
                            !isEmpty(auth) && isLoaded(auth) && !isEmpty(user) && isLoaded(user)?
                            <IconButton aria-label="bookmark" onClick={onClick} color={color? 'secondary': 'primary'}>
                                {color? <BookmarkIcon />: <BookmarkBorder />}
                            </IconButton> : <></>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <Button href={link} target="_blank" rel="noreferrer">Sign Up</Button>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Item>
                                    <AccessibilityNewIcon sx = {{verticalAlign: 'middle'}}></AccessibilityNewIcon>
                                    {accessibility}
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <InterestsIcon sx = {{verticalAlign: 'middle'}}></InterestsIcon>
                                    {interest}
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <ScheduleIcon sx = {{verticalAlign: 'middle'}}></ScheduleIcon>
                                    {commitment}
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <CakeIcon sx = {{verticalAlign: 'middle'}}></CakeIcon>
                                    {min_age}
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <LocationOnIcon sx = {{verticalAlign: 'middle'}}></LocationOnIcon>
                                    {location}
                                </Item>
                            </Grid>
                        </Grid>
                        </CardContent>
                    </Collapse>
                </Box>
            </Card>
        </Box>
    );
}


function shallowEqual(object1: any, object2: any) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }

function checkEquality(user: Record<string, any>, auth: FirebaseReducer.AuthState, organization: string, name: string,) {
    const bookmark = user[auth.uid]?.bookmarks
    const keys = bookmark ? Object.keys(user[auth.uid]?.bookmarks) : undefined
    let keyEqual= ''
    if (keys) {
        for (const key of keys) {
            if (shallowEqual(bookmark[key],{organization: organization, name: name})) {
                keyEqual = key
                break
            }
        }
    }
    return keyEqual
}
export default PositionListItem