import * as React from 'react';
import OrgList from "../Positions/PositionList"
import FilterBar from "../FilterBar/FilterBar";
import Grid from '@mui/material/Grid';
import Footer from '../NavBar/Footer';
import { Button, Stack } from '@mui/material';



const HomePage: React.FC = () => {

    const [open, setOpen] = React.useState<boolean>(false)
    const handleHideFilter = () => {
        setOpen(!open)
    }


    const [small, setSmall] = React.useState<boolean>(false)

    React.useEffect(() => {
        const mq_small = window.matchMedia("(max-width: 768px)")
        if (mq_small.matches) {
            setSmall(true)
        } else {
            setSmall(false)
        }
    }, [window])

    window.addEventListener('resize', (event) => {
        const mq_small = window.matchMedia("(max-width: 768px)")
        if (mq_small.matches) {
            setSmall(true)
        } else {
            setSmall(false)
        }    
    }, true)

    if (small) {
        return (
            <>
                <Stack max-width="700px"
                // container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={6} marginLeft={4} marginRight={4} paddingBottom={6}
                >
                    {/* <Item xs={3} marginLeft={4}> */}
                    {!open ?
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            variant="contained"
                            onClick={handleHideFilter}
                        >
                            Show Filter
                        </Button>

                        :
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            variant="contained"

                            onClick={handleHideFilter}
                        >
                            Hide Filter
                        </Button>

                    }

                    {open ?
                        <FilterBar />
                        :
                        <></>}
                    {/* </Item> */}
                    {/* <Grid item xs={8}> */}
                    <OrgList />
                    {/* </Grid> */}
                </Stack>
            </>
        )
    } else {
        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={6} marginLeft={4} marginRight={4} paddingBottom={6}>
                    <Grid item xs={3} marginLeft={4}>
                        {!open ?
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                variant="contained"
                                onClick={handleHideFilter}
                            >
                                Show Filter
                            </Button>

                            :
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                variant="contained"

                                onClick={handleHideFilter}
                            >
                                Hide Filter
                            </Button>

                        }
                        <FilterBar />
                    </Grid>
                    <Grid item xs={8}>
                        <OrgList />
                    </Grid>
                </Grid>
            </>
        )
    }

}


export default HomePage