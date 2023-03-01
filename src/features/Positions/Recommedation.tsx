import { FirebaseReducer, isLoaded, useFirebaseConnect } from "react-redux-firebase";
import { Position } from "../../dbSchemas";
import { useAppSelector } from "../../hooks";
import { UserDataState } from "../UserDataDialog/UserDataSlice";

export const recommendationFunction = (positions: [string, Position][], auth: FirebaseReducer.AuthState, filters:  String[], userData: UserDataState): [string, Position][] => {
  // const auth = useAppSelector(state => state.firebase.auth)
  // const filters = useAppSelector(state => state.filters.activeFilters)
  // useFirebaseConnect({ path: `users/${auth.uid}` })
  // const userData = useAppSelector(state => state.userData)
  // #region if no filters
  if (filters.length > 0) {
    if(userData) {
      const userFilterRec = userData.currAccessibility.concat(userData.currInterest)
      return sortPosition(positions, userFilterRec)
    }
  } else {
    return sortPosition(positions, filters)
  }
  return []
  // #endregion
}

const getScore = (currentPosition: any, score: number, filters: String[]) => {
  if (currentPosition.interst !== undefined && currentPosition.accessibility !== undefined) {
    const posPropertyString = currentPosition.interest.concat(", ", currentPosition.accessibility)
    console.log(posPropertyString)
    const posProperty = posPropertyString.split(", ")
    for (const filter of filters) {
        if (posProperty.includes(filter)) {
            score += 1
        }
    }
  }
  return score
}

const sortPosition = (positions: [string, Position][], filters: String[]) => {
  return positions.sort((curr, next) => {
    let currScore = 0
    let nextScore = 0
    const currentPosition =  curr[1] as any
    // console.log(currentPosition)
    currScore = getScore(currentPosition, currScore, filters)
    const nextPosition =  next[1] as any
    // console.log(nextPosition)
    nextScore = getScore(nextPosition, currScore, filters)
    if (currScore > nextScore) {
      return 1
    }
    if (currScore < nextScore) {
      return -1
    }
    return 0
  })
}