import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from '../../hooks';
import { Box } from '@mui/material';
import { selectFilters, setFilters } from './FiltersSlice';
import { store } from '../../store';


// Change line 28 to map over filters
const FilterList: React.FC = () => {
    const [checked, setChecked] = React.useState<string[]>([]);

    const interests = useAppSelector(state => state.firebase.data.interest)

    const activeFilters = useAppSelector(state => state.filters)

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
                Interests
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
                                        <ListItemText id={labelId} primary={`Filter ${valueIndex + 1}: ${value[1].name}`} /> 
                                    </ListItemButton>
                                </ListItem>
                            );
                        }) : <></>
                    }
                </List>
            </Box>
            <Box>
                Accessibilities
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
                                                // checked={checked.indexOf(valueIndex) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`Filter ${valueIndex + 1}: ${value[1].name}`} /> 
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