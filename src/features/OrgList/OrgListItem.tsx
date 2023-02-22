import { useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { RootState } from "../../store"
import { selectOrgId, setOrgId } from "./OrgsSlice"

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
import FavoriteIcon from '@mui/icons-material/Favorite';
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

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Org Cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    title="Position Title"
                    subheader="Organization Title"
                    action={
                        <IconButton aria-label="settings">
                          <BookmarkBorder />
                        </IconButton>
                      }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                            This is a list of Accessibility Requirements. Or Descrption of physical requirements
                        </Typography>
                    </CardContent>
                </Collapse>
            </Box>
        </Card>
    );
}

export default OrgListItem