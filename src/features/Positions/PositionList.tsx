import PositionListItem from "./PositionListItem"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { useFirebaseConnect } from "react-redux-firebase";
import { selectFilters } from "../FilterBar/FiltersSlice";
import { PersistState, store } from "../../store";

// TO:Do loop through all the positions to make the org list

interface OrgListItemProps {
    accessibility: string,
    commitment: string,
    description: string,
    interest: string,
    link: string,
    location: string,
    min_age: number,

    name: string,
    organization: string,

}


const OrgList: React.FC = () => {

    useFirebaseConnect({ path: "interest" })

    useFirebaseConnect({ path: "positions" })

    const positions = useAppSelector(state => state.firebase.data.positions)
    const filters = useAppSelector(state => state.filters.activeFilters)
    console.log(filters)
    React.useEffect(() => {
        console.log(filters)
        // if (positions) {
        //     console.log(positions)
        // }
    }, [positions, filters])

    return (
        <Box>
        {positions ?
            Object.entries(positions).map((position) => {
                const currentPosition = position[1] as any
                console.log(currentPosition)
                return (
                    <PositionListItem
                        key={`${currentPosition.organization}_${currentPosition.name}`}
                        accessibility={currentPosition.accessibility}
                        commitment={currentPosition.commitment}
                        description={currentPosition.description}
                        interest={currentPosition.interest}
                        link={currentPosition.link}
                        location={currentPosition.location}
                        min_age={parseInt(currentPosition.min_age)}
                        name={currentPosition.name}
                        organization={currentPosition.organization}
                    />
                )
            })
            : <></>
        }
        </Box>
    )
}

export default OrgList

