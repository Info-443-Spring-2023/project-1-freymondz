import * as React from 'react';
import NavBar from "../NavBar/NavBar"
import { Typography } from '@mui/material';
import Footer from '../NavBar/Footer';

const AboutPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Typography>
                <h1 >About Our Site</h1>
            </Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. At auctor urna nunc id cursus. A cras semper auctor neque vitae tempus quam pellentesque. Elementum curabitur vitae nunc sed. Dignissim suspendisse in est ante in nibh mauris. Sit amet dictum sit amet justo donec enim diam. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Ac turpis egestas maecenas pharetra convallis. Enim diam vulputate ut pharetra. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Ornare aenean euismod elementum nisi quis eleifend quam. Dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vestibulum sed arcu non odio euismod lacinia at quis. Nibh praesent tristique magna sit amet purus gravida. Eu ultrices vitae auctor eu augue ut lectus arcu. Quis lectus nulla at volutpat diam ut.</Typography>
            
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. At auctor urna nunc id cursus. A cras semper auctor neque vitae tempus quam pellentesque. Elementum curabitur vitae nunc sed. Dignissim suspendisse in est ante in nibh mauris. Sit amet dictum sit amet justo donec enim diam. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Ac turpis egestas maecenas pharetra convallis. Enim diam vulputate ut pharetra. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Ornare aenean euismod elementum nisi quis eleifend quam. Dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vestibulum sed arcu non odio euismod lacinia at quis. Nibh praesent tristique magna sit amet purus gravida. Eu ultrices vitae auctor eu augue ut lectus arcu. Quis lectus nulla at volutpat diam ut.</Typography>
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