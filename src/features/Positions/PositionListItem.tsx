import { useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
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
    interest: string,
    link: string,
    location: string,
    min_age: number,
    name: string,
    //the organization name in Firebase
    organization: string,

}

const PositionListItem = ({ accessibility, commitment,
    description, interest, link, location, min_age, name,
    organization }: OrgListItemProps) => {

    const firebase = useFirebase()

    const onClick = () => {
        // Object.keys(organizationsFromFirebase).forEach(() => {
        //     //go into "organizations" from Firebase
        //     //try to match the organization.name == 
        // })
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box paddingBottom={5}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 175, height:200 }}
                    image="newLogo.png"
                    alt="Org Cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                        title={name}
                        subheader={organization}
                        action={
                            <IconButton aria-label="bookmark">
                                <BookmarkBorder />
                            </IconButton>
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

export default PositionListItem