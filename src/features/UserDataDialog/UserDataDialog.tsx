import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Popper, Stack, TextField, ListItem, IconButton } from '@mui/material';
import * as React from 'react';
import { useAppSelector } from '../../hooks';
import { PersistState, store } from '../../store';
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from 'react-redux';
import { setUserDataEdit } from './UserDataSlice';
import { ReactElement, useState } from 'react';
import { useFirebaseConnect } from 'react-redux-firebase';
import { pushSelectedInterest } from '../Interest/InterestSlice';
import FileUploadIcon from '@mui/icons-material/FileUpload';


const UserDataDialog: React.FC = () => {
  const open = useSelector((state: PersistState) => state.userData.edit)
  useFirebaseConnect({ path: "interest" })
  const interests = useSelector((state: PersistState) => state.firebase.data.interest)
  useFirebaseConnect({ path: "accessibility" })
  const accessiblities = useSelector((state: PersistState) => state.firebase.data.accessibility)
  // console.log(interests);
  // console.log(accessiblities);
  console.log(useSelector((state: PersistState) => state.firebase.auth))

  const [currInterest, setInterest] = useState<String[]>([])
  const [currAccessibility, setAccessiblity] = useState<String[]>([])
  const [profilePic, setProfilePic] = useState<File>();
  console.log(currInterest);
  console.log(currAccessibility);
  console.log(profilePic);
  const handleInterestClick = (e: any) => {
    if (currInterest.includes(e.target.innerText)) {
      setInterest(currInterest.filter(curr => { return e.target.innerText !== curr }))
    } else {
      setInterest([...currInterest, e.target.innerText])
    }
  }
  const handleAccessiblityClick = (e: any) => {
    if (currAccessibility.includes(e.target.innerText)) {
      setAccessiblity(currAccessibility.filter(curr => { return e.target.innerText !== curr }))
    } else {
      setAccessiblity([...currAccessibility, e.target.innerText])
    }
  }
  const handleImageInput = (e: any) => {
    setProfilePic(e.target.files[0])
  }
  console.log(currInterest)
  const handleClose = () => {
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
    <Dialog open={open} onClose={handleClose}>
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
          <input hidden accept="image/*" multiple type="file" onInput={handleImageInput}/>
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  )

}


export default UserDataDialog