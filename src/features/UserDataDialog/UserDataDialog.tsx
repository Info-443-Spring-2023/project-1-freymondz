import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Popper, Stack, TextField, ListItem } from '@mui/material';
import * as React from 'react';
import { useAppSelector } from '../../hooks';
import { PersistState, store } from '../../store';
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from 'react-redux';
import { setUserDataEdit } from './UserDataSlice';
import { ReactElement, useState } from 'react';
import { useFirebaseConnect } from 'react-redux-firebase';
import { pushSelectedInterest } from '../Interest/InterestSlice';

const UserDataDialog: React.FC = () => {
  const open = useSelector((state: PersistState) => state.userData.edit)
  useFirebaseConnect({ path: "interest" })
  const interests = useSelector((state: PersistState) => state.firebase.data.interest)
  console.log(interests);

  const [currInterest, setInterest] = useState<String[]>([])
  const handleClick = (e: any) => {
    if(currInterest.includes(e.target.innerText)) {
      setInterest(currInterest.filter(curr => { return e.target.innerText !== curr}))
    } else {
      setInterest([...currInterest, e.target.innerText])
    }
  }
  console.log(currInterest)
  const handleClose = () => {
    store.dispatch(setUserDataEdit(true))
  }
  const chipArrary = []
  for (const key in interests) {
    chipArrary.push(<Chip key={interests[key].name} label={interests[key].name} size="small" color="primary" variant={!currInterest.includes(interests[key].name) ? "outlined":"filled"} onClick={handleClick} />)
  }
  return (
    <Dialog open={!open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{marginBottom: "1em"}}>
          What are you interested in?
        </DialogContentText>
        <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, }}>
          {chipArrary}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  )

}


export default UserDataDialog