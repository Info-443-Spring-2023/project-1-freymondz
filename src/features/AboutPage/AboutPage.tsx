import * as React from 'react';
import { Typography } from '@mui/material';
import Footer from '../NavBar/Footer';

const AboutPage: React.FC = () => {
    return (
        <>
            <Typography>
                <h1 >About Our Site</h1>
            </Typography>
            <Typography variant="body1">Volunteering is a key importance to the development of our society & communities. Through volunteering, everyone is able to learn aout global matters & help make a change not only within their community but through the world too. Our website "FutureForward" allows our younger audience of studenst to be able to be more knowledgable on ways of helping in different sectors near them. Through our website "FutureForwrd", students can :  </Typography>

            <Typography variant="body1">List of what the website can do such as features</Typography>

            
            <Typography variant="body1">The following TedX video presents speaker, 13 year old Kofoworola Jolaoso, as she talks about the importance of allowing and letting kids start volunteering at a young age. The main problem that Jolaoso states is that the problem isnt the lack of interest but the lack of knowledge in helping & see what is avialabe to help in.  </Typography>

            <Typography></Typography>
            
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

            <Footer></Footer>

        </>
    )

}


export default AboutPage