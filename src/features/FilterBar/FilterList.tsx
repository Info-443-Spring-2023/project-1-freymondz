import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from '../../hooks';
import { Box, Typography } from '@mui/material';
import { selectFilters, setFilters } from './FiltersSlice';
import { store } from '../../store';
import { useFirebaseConnect } from 'react-redux-firebase';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InterestsIcon from '@mui/icons-material/Interests';


// Change line 28 to map over filters
const FilterList: React.FC = () => {
    // connecting it to firebase
    useFirebaseConnect({ path: "interest" })

    useFirebaseConnect({ path: "positions" })

    const [checked, setChecked] = React.useState<string[]>([]);

    // querying data from Firebase
    const interests = useAppSelector(state => state.firebase.data.interest)

    const activeFilters = useAppSelector(state => state.filters.activeFilters)

    const accessibilities = useAppSelector(state => state.firebase.data.accessibility)

    const handleToggle = (value: string) => () => {
        const newChecked = [...checked];

        // delete value if exists in checked array
        if (newChecked.includes(value)) {
            const newIndex = newChecked.indexOf(value)
            newChecked.splice(newIndex, 1)
            setChecked(newChecked)
        } else {
            // if value doesn't yet exist, put it in the checked array
            newChecked.push(value)
            setChecked(newChecked);
        }
    }

    // when checked status or filters change, dispatch and update Redux state
    React.useEffect(() => {
        store.dispatch(setFilters(checked))
    }, [checked, activeFilters])

    return (
        <Box>
            <Box>
                <Typography align='center'>Interests<InterestsIcon sx = {{verticalAlign: 'middle'}}></InterestsIcon>
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {interests ?
                        Object.entries(interests).map((value) => {
                            const labelId = `checkbox-list-label-${value[0]}`

                            const valueIndex = parseInt(value[0])
                            const valueName = value[1].name
                            return (
                                <ListItem
                                    key={value[0]}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(valueName)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.includes(valueName)}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value[1].name}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        }) : <></>
                    }
                </List>
            </Box>
            <Box>
                <Typography align='center'>Accessibilities<AccessibilityNewIcon sx = {{verticalAlign: 'middle'}}></AccessibilityNewIcon>
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {accessibilities ?
                        Object.entries(accessibilities).map((value) => {
                            const labelId = `checkbox-list-label-${value[0]}`

                            const valueIndex = parseInt(value[0])
                            const valueName = value[1].name
                            return (
                                <ListItem
                                    key={value[0]}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(valueName)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.includes(valueName)}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value[1].name}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        }) : <></>
                    }
                </List>
            </Box>
        </Box>
    )
}

export default FilterList