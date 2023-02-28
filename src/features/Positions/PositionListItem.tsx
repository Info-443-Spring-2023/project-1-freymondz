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
                sx={{ width: 151 }}
                image="...../logo192.png"
                alt="Org Cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    title={name}
                    subheader={organization}
                    action={
                        <IconButton aria-label="settings">
                          <BookmarkBorder />
                        </IconButton>
                      }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
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
                        <Typography paragraph>Accessibility:</Typography>
                        <Typography paragraph>
                            {accessibility}
                        </Typography>
                        <Typography paragraph>External Link: {link}</Typography>
                    </CardContent>
                </Collapse>
            </Box>
        </Card>
        </Box>
    );
}

export default PositionListItem