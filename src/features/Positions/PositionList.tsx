import PositionListItem from "./PositionListItem"
import * as React from 'react';
import { useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { Position } from "../../dbSchemas";
import { useState } from "react";
import { recommendationFunction } from "./Recommedation";

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

    const auth = useAppSelector(state => state.firebase.auth)
    useFirebaseConnect({ path: `users/${auth.uid}` })
    const userData = useAppSelector(state => state.userData)

    const uid = useAppSelector(({ firebase }) => firebase.auth.uid)

    const [oldFilter, setOldFilter] = useState<String[]>([])
    const [displayPositions, setDisplayPositions] = useState<[string, Position][]>([])
    // console.log(filters)
    React.useEffect(() => {
        if (isLoaded(positions) && isLoaded(auth) && isLoaded(userData) && isLoaded(filters)) {
            if (oldFilter !== filters) {
                if (filters.length > 0) {
                    console.log(filters)
                    setDisplayPositions(recommendationFunction(Object.entries(positions).filter((position) => {
                        const currentPosition = position[1] as any
                        const posPropertyString = currentPosition.interest.concat(", ", currentPosition.accessibility)
                        const posProperty = posPropertyString.split(", ")
                        for (const filter of filters) {
                            if (posProperty.includes(filter)) {
                                return true
                            }
                        }
                        return false
                    }), auth, filters, userData))
                }
                if (filters.length === 0) {
                    setDisplayPositions(recommendationFunction((Object.entries(positions).map(position => {return position})), auth, filters, userData))
                }
                setOldFilter(filters)
                // console.log(oldFilter)
            }

        }

    }, [positions, filters, displayPositions, auth, filters, userData])
    // console.log(displayPositions)
    return (
        <Box>
            {displayPositions.length > 0 ?
                displayPositions.map((position) => {
                    const currentPosition = position[1] as any
                    // console.log(currentPosition.accessibility)
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

