import PositionListItem from "./PositionListItem"
import * as React from 'react';
import { useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { Position } from "../../dbSchemas";
import { useState } from "react";

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
    const [oldFilter, setOldFilter] = useState<String[]>([])
    const [displayPositions, setDisplayPositions] = useState<[string, Position][]>([])
    console.log(filters)
    React.useEffect(() => {
        if (isLoaded(positions)) {
            if (oldFilter !== filters) {
                if (filters.length > 0) {
                    setDisplayPositions(Object.entries(positions).filter((position) => {
                        const currentPosition = position[1] as any
                        const posPropertyString = currentPosition.interest.concat(", ", currentPosition.accessibility)
                        const posProperty = posPropertyString.split(", ")
                        for (const filter of filters) {
                            if (posProperty.includes(filter)) {
                                return true
                            }
                        }
                        return false
                    }))
                }
                if (filters.length === 0) {
                    setDisplayPositions(Object.entries(positions).map(position => {return position}))
                }
                setOldFilter(filters)
                console.log(oldFilter)
            }

        }

    }, [positions, filters, displayPositions])
    console.log(displayPositions)
    return (
        <Box>
            {displayPositions.length > 0 ?
                displayPositions.map((position) => {
                    const currentPosition = position[1] as any
                    console.log(currentPosition.accessibility)
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

