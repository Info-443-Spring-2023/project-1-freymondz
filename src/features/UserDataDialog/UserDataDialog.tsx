import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Popper, Stack, TextField, ListItem, IconButton } from '@mui/material';
import * as React from 'react';
import { useAppSelector } from '../../hooks';
import { PersistState, store } from '../../store';
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from 'react-redux';
import { pushUserDataAccessibility, pushUserDataInterest, setUserDataEdit, setUserDataInterest, setUserDataPic } from './UserDataSlice';
import { ReactElement, useEffect, useState } from 'react';
import { isLoaded, useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { pushSelectedInterest } from '../Interest/InterestSlice';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { profile } from 'console';

const UserDataDialog: React.FC = () => {
  const firebase = useFirebase();
  const open = useSelector((state: PersistState) => state.userData.edit)
  useFirebaseConnect({ path: "interest" })
  const interests = useSelector((state: PersistState) => state.firebase.data.interest)
  useFirebaseConnect({ path: "accessibility" })
  const accessiblities = useSelector((state: PersistState) => state.firebase.data.accessibility)
  const auth = useSelector((state: PersistState) => state.firebase.auth)
  useFirebaseConnect({ path: `users/${auth.uid}` })
  const initInterest = useSelector((state: PersistState) => state.userData.currInterest)
  const initAccess = useSelector((state: PersistState) => state.userData.currAccessibility)
  const initPic = useSelector((state: PersistState) => state.userData.profilePic)
  const[currInterest, setInterest] = useState<String[]>(initInterest)
  const [currAccessibility, setAccess] = useState<String[]>(initAccess)
  let [profilePic, setPic] = useState<String>(initPic);

  const handleInterestClick = (e: any) => {
    if (currInterest.includes(e.target.innerText)) {
      const newInterest = currInterest.filter(curr => { return e.target.innerText !== curr })
      setInterest(newInterest)
      store.dispatch(setUserDataInterest(newInterest))
    } else {
      setInterest([...currInterest, e.target.innerText])
      store.dispatch(pushUserDataInterest(e.target.innerText))
    }
  }
  const handleAccessiblityClick = (e: any) => {
    if (currAccessibility.includes(e.target.innerText)) {
      const newAccess = currAccessibility.filter(curr => { return e.target.innerText !== curr })
      setAccess(newAccess);
      store.dispatch(setUserDataInterest(newAccess))
    } else {
      setAccess([...currAccessibility, e.target.innerText])
      store.dispatch(pushUserDataAccessibility(e.target.innerText))
    }
  }
  const handleImageInput = async (e: any) => {
    const storage = getStorage();
    const storageRef = ref(storage, `users/${auth.uid}`);
    const metadata = {
      contentType: e.target.files[0].type,
    };
    uploadBytes(storageRef, e.target.files[0], metadata).then((e) => console.log(e))
      .catch(err => console.log(err)); //log any errors for debugging
    setPic(`users/${auth.uid}`)
    store.dispatch(setUserDataPic(`users/${auth.uid}`))
  }
  if (isLoaded(interests) && isLoaded(accessiblities)) {
    const backDropCheck = (event: any, reason: string) => {
      if (reason && reason == "backdropClick")
          return;
      handleClose();
    }
    const handleClose = () => {
      firebase.set(`users/${auth.uid}`, { interests: currInterest, accessibilities: currAccessibility, profile_picture: profilePic }).then(() => console.log("data upload successfully!"))
        .catch(err => console.log(err));
      store.dispatch(setUserDataEdit(false))
    }
    const chipInterestArrary = []
    for (const key in interests) {
      chipInterestArrary.push(<Chip key={interests[key].name} label={interests[key].name} size="small" color="primary" variant={!currInterest.includes(interests[key].name) ? "outlined" : "filled"} onClick={handleInterestClick} />)
    }
    const chipAccessibilityArrary = []
    for (const key in accessiblities) {
      chipAccessibilityArrary.push(<Chip key={accessiblities[key].name} label={accessiblities[key].name} size="small" color="primary" variant={!currAccessibility.includes(accessiblities[key].name) ? "outlined" : "filled"} onClick={handleAccessiblityClick} />)
    }
    return (
      <Dialog open={open} onClose={backDropCheck}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: ".5em" }}>
            What are you interested in? Select all that applies.
          </DialogContentText>
          <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginBottom: "1em" }}>
            {chipInterestArrary}
          </Stack>
          <DialogContentText sx={{ marginBottom: ".5em" }}>
            Are you a person living With a disability? Select all that applies.
          </DialogContentText>
          <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginBottom: "1em" }}>
            {chipAccessibilityArrary}
          </Stack>
          <DialogContentText sx={{ marginBottom: ".5em" }}>
            Upload an Image for your profile?
          </DialogContentText>
          <Button variant="contained" endIcon={<FileUploadIcon />} component="label">
            Upload Image
            <input hidden accept="image/*" multiple type="file" onInput={handleImageInput} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    )
  }
  return (
    <Dialog open={!open}>
      <DialogTitle>User Edit Data</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: ".5em" }}>
          Loading...
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}


export default UserDataDialog