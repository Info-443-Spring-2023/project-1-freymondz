import { useFirebase, useFirebaseConnect } from "react-redux-firebase"
import { useAppSelector } from "../../hooks"
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const NavBar: React.FC = () => {
    const firebase = useFirebase()
    // const organizations = useAppSelector(state => state.firebase.data.organizations)
    // console.log(organizations)

    useFirebaseConnect({path: "organization"})
    console.log(useAppSelector(state => state.firebase.data.organization))
    return (
        <>
            {/* TODO: create the navbar */}
            <h1>I'm the NavBar!</h1>
        </>
    )
}

export default NavBar