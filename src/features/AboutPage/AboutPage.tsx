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
                <Typography>
                    <b>
                        How might we help high school students discover local volunteering opportunities that align with their interests to better serve their community?
                    </b>
                </Typography>

                <Typography>
                    <ul>

                    </ul>
                </Typography>
                
                <Typography variant="body1">Volunteering is a key importance to the development of our society & communities. Through volunteering, everyone is able to learn aout global matters & help make a change not only within their community but through the world too. Our website "FutureForward" allows our younger audience of studenst to be able to be more knowledgable on ways of helping in different sectors near them. Through our website "FutureForwrd", students can :  </Typography>

                <Typography variant="body1">
                    <ul>
                        <li>
                            Register & create a personalized account. 
                        </li>

                        <li>
                            Find volunteer oppourtunities based on filtered interests.
                        </li>

                        <li>
                            Bookmark volunteer oppourtunities to be saved and seen in personal profiles
                        </li>

                        <li>
                            Have accurate information on accessible volunteer oppourtunities.
                        </li>

                        <li>
                            Save service information done within their personalized profiles.
                        </li>
                    </ul>
                </Typography>

                <Typography>
                    When developing this website for youth, we had in mind developing sustainable cities & communities to be able to make them more inclusive, safe, resilient and sustainable. The youth are the future of these cities & communities & therfore motivating them to create a sustainable city through volunteering is key for the future. 
                </Typography>

                <Typography>
                    <ul>

                    </ul>
                </Typography>

                <Typography variant="body1">
                    The following TedX video presents speaker, 13 year old Kofoworola Jolaoso, as she talks about the importance of allowing and letting kids start volunteering at a young age. The main problem that Jolaoso states is that the problem isnt the lack of interest but the lack of knowledge in helping & see what is avialabe to help in. 
                </Typography>
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