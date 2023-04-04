import * as React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'

const AboutPage: React.FC = () => {
    const Video = styled('iframe')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
            width: 1200,
            height: 720
        }
    }));

    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                paddingTop={5}>
                <Typography variant="h3">
                    About Our Site
                </Typography>
            </Box>
            <Box padding={5}>
                <Typography>
                    <b>
                        How might we help high school students discover local volunteering opportunities that align with their interests to better serve their community?
                    </b>
                </Typography>


                {/* if you want to use unorder list, please follow this format to
                    reduce error
                    <List sx={{ listStyleType: 'disc', pl: 4 }} >
                        <ListItem sx={{ display: 'list-item' }}>
                    </ListItem>
                </List> */}


                <Typography variant="body1">Volunteering is a key importance to the development of our society & communities. Through volunteering, everyone is able to learn about global matters & help make changes not only within their community but through the world too. Our website "FutureForward" allows our younger audience of students to be able to be more knowledgable on ways of helping in different sectors near them. Through our website "FutureForward", students can :  </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }} >
                    <ListItem sx={{ display: 'list-item' }}>
                        Register & create a personalized account.
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        Find volunteer oppourtunities based on filtered interests.
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        Bookmark volunteer oppourtunities to be saved and seen in personal profiles
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        Have accurate information on accessible volunteer oppourtunities.
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        Save service information done within their personalized profiles.
                    </ListItem>
                </List>

                <Typography>
                    When developing this website for youth, we had in mind developing sustainable cities & communities to be able to make them more inclusive, safe, resilient and sustainable. The youth are the future of these cities & communities & therefore motivating them to create a sustainable city through volunteering is key for the future.
                </Typography>

                {/* <Typography>
                    <ul>

                    </ul>
                </Typography> */}

                <Typography variant="body1">
                    The following TedX video presents speaker, 13 year old Kofoworola Jolaoso, as she talks about the importance of allowing and letting kids start volunteering at a young age. The main problem that Jolaoso states is that the problem isnt the lack of interest but the lack of knowledge in helping & see what is avialabe to help in.
                </Typography>
            </Box>

            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                paddingBottom={5}>
                <div className="video-responsive">
                        <Video
                            src={`https://www.youtube.com/embed/fDocxsO2tYA`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                </div>
            </Box>

        </>
    )

}


export default AboutPage