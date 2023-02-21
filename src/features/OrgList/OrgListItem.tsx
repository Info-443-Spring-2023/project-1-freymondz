import { useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { RootState } from "../../store"
import { selectOrgId, setOrgId } from "./OrgsSlice"

//TODO: rename this to positionListItem
const OrgListItem: React.FC = () => {

    const firebase = useFirebase()
    // const organizationsFromFirebase = useSelector((state: RootState) => state.firebase.data.organization)
    // when you click this, you set the organization id to equal the queried firebase db's organization id.
    const onClick = () => {
        // Object.keys(organizationsFromFirebase).forEach(() => {
        //     //go into "organizations" from Firebase
        //     //try to match the organization.name == 
        // })
    }
    return (
        <>
            {/* TODO: render one individual org list item. */}
            <h5 onClick={onClick}>I'm Seattle Promise</h5>
            {/* do this as a MUI button or something */}
            <h5>Interests go here </h5>
             {/* do this as a MUI button or something */}
             <h5>Accessibilities go here </h5>
        </>
    )
}

export default OrgListItem