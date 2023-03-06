import * as React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
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
                <Typography variant="body1">Volunteering is a key importance to the development of our society & communities. Through volunteering, everyone is able to learn aout global matters & help make a change not only within their community but through the world too. Our website "FutureForward" allows our younger audience of studenst to be able to be more knowledgable on ways of helping in different sectors near them. Through our website "FutureForwrd", students can :  </Typography>

                <Typography variant="body1">
                    <ul>
                        <li>
                            1. Register & create a personalized account. 
                            2. Find volunteer oppourtunities based on filtered interests.
                            3. Bookmark volunteer oppourtunities to be saved and seen in personal profiles
                            4. Have accurate information on accessible volunteer oppourtunities.
                            5. Save service information done within their personalized profiles.
                        </li>
                    </ul>
                </Typography>

                <Typography variant="body1">The following TedX video presents speaker, 13 year old Kofoworola Jolaoso, as she talks about the importance of allowing and letting kids start volunteering at a young age. The main problem that Jolaoso states is that the problem isnt the lack of interest but the lack of knowledge in helping & see what is avialabe to help in.  </Typography>
            </Box>

            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                paddingBottom={5}>
                <div className="video-responsive">
                    <iframe
                        width="853"
                        height="480"
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