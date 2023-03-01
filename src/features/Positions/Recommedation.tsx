import { filter } from "lodash";
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
  // console.log(filters.length === 0)
  if (filters.length === 0) {
    if(userData) {
      const userFilterRec = userData.currAccessibility.concat(userData.currInterest)
      // console.log(userData.currAccessibility)
      // console.log(userData.currInterest)
      // const result = sortPosition(positions, userFilterRec)
      // console.log(result)
      return sortPosition(positions, userFilterRec)
    }
  } else {
    const result =  sortPosition(positions, filters)
    // console.log(positions)
    // console.log(result)
    return result
  }
  return []
  // #endregion
}

const getScore = (currentPosition: any, score: number, filters: String[]) => {
  // console.log(currentPosition.interest !== undefined && currentPosition.accessibility !== undefined)
  if (currentPosition.interest !== undefined && currentPosition.accessibility !== undefined) {
    const posPropertyString = currentPosition.interest.concat(", ", currentPosition.accessibility)
    const posProperty = posPropertyString.split(", ")
    // console.log(posProperty)
    for (const filter of filters) {
        // console.log(filter)
        // console.log(posProperty)
        // console.log("\n")
        if (posProperty.includes(filter)) {
            console.log(filter)
            score ++
        }
    }
  }
  // console.log(score)
  return score
}

const sortPosition = (positions: [string, Position][], filters: String[]) => {
  const result = positions.sort((a, b) => {
    let currScore = 0
    let nextScore = 0
    const currentPosition =  a[1] as any
    // console.log(currentPosition)
    currScore = getScore(currentPosition, currScore, filters)
    const nextPosition =  b[1] as any
    // console.log(nextPosition)
    nextScore = getScore(nextPosition, nextScore, filters)
    // if (currScore > nextScore) {
    //   console.log(-1)
    //   return -1
    // }
    // if (currScore < nextScore) {
    //   console.log(1)
    //   return 1
    // }
    // console.log(0)
    // console.log(currScore - nextScore);
    return nextScore - currScore;
  })
  // console.log(result)
  return result
}