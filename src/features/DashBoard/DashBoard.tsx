import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Stack, Typography } from "@mui/material"
import { url } from "inspector"
import { useEffect, useState } from "react"
import Footer from "../NavBar/Footer"
import NavBar from "../NavBar/NavBar"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { storage, auth } from "firebase-admin"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { store } from "../../store"
import { setUserDataEdit, setUserDataPic } from "../UserDataDialog/UserDataSlice"
import { useAppSelector } from "../../hooks"
import { useFirebaseConnect } from "react-redux-firebase"
import { Organization, Position } from "../../dbSchemas"
import PositionListItem from "../Positions/PositionListItem"

const DashBoard: React.FC = () => {
    const [url, setURL] = useState<string>('');
    
    const userData = useAppSelector((state) => state.userData)

    const [profilePic, setPic] = useState<String>(userData.profilePic);

    const storage = getStorage();

    useFirebaseConnect({ path: "positions" })

    const positions = useAppSelector((state) => state.firebase.data.positions)

    const auth = useAppSelector((state) => state.firebase.auth)

    const user = useAppSelector(state => state.firebase.data.users)

    // const userFirebase = useAppSelector((state) => state.firebase.data.user)
    useFirebaseConnect({ path: `users/${auth.uid}` })


    // this is to internal storage, to display positions later
    const [displayPositions, setDisplayPositions] = useState<Position[]>([])

    // when user, auth id, storage, or positions change, update the client
    useEffect(() => {
        if (user?.[auth.uid]?.bookmarks) {
            // console.log(Object.entries(user?.[auth.uid]?.bookmarks))
            let orgArray: string[] = []
            Object.entries(user?.[auth.uid]?.bookmarks).forEach((org: any) => {
                orgArray.push(org[1])
                console.log(org[1])
            })
            // if (orgArray.length > 0) {
            //     console.log(orgArray)
            // }
            if (positions) {
                let posArray: Position[] = []
                Object.entries(positions).forEach((position: any) => {
                    orgArray.forEach((position1: any) => {
                        if (position[1].name === position1.name) {
                            posArray.push(position[1])
                        }
                    })
                })
                console.log(posArray)
                setDisplayPositions(posArray)
            }
        } else {
            setDisplayPositions([])
        }
        
    }, [user, auth.uid, storage, positions,  ])


    return (
        <>
            {/* TODO: call the UserDataDialog react function component when u click on "edit profile" */}
            <Box>
                <Avatar alt="Demo user profile" src={url} sx={{ width: 150, height: 150, marginBottom: '1rem' }}/>
                {/* <DialogContentText sx={{ marginBottom: ".5em" }}>
                    Upload an Image for your profile?
                </DialogContentText> */}
                <MenuItem key={"Edit Profile"} onClick={() => { store.dispatch(setUserDataEdit(true)) }} />
                
                <Button variant="contained" endIcon={<FileUploadIcon />} component="label" onClick={() => { store.dispatch(setUserDataEdit(true))}}>
                    Edit Profile
                    {/* <input hidden accept="image/*" multiple type="file" onInput={handleImageInput} /> */}
                </Button>
            </Box>
            <Box>
                Bookmarked Opportunities
                {displayPositions.length > 0 ?
                    displayPositions.map((position: any) =>{
                        const currentPosition = position as any
                        // console.log(currentPosition.accessibility)
                        return (
                            <PositionListItem
                                key={`${currentPosition.organization}_${currentPosition.name}`}
                                accessibility={currentPosition.accessibility}
                                commitment={currentPosition.commitment}
                                description={currentPosition.description}
                                img={currentPosition.img}
                                interest={currentPosition.interest}
                                link={currentPosition.link}
                                location={currentPosition.location}
                                min_age={parseInt(currentPosition.min_age)}
                                name={currentPosition.name}
                                organization={currentPosition.organization}
                            />
                        )
                
                    })
                : <></>}
            </Box>
        </>
    )
}

export default DashBoard