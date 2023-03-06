import { ExtendedFirebaseInstance, isEmpty, isLoaded, useFirebase, useFirebaseConnect } from "react-redux-firebase"
import { useAppSelector } from "../../hooks"
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

// creating nav bar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { connect, useSelector } from "react-redux";
import { LOGO_IMG_LOCATION, PersistState, PropsFromRedux, store } from "../../store";
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import { StyledFirebaseAuth } from "react-firebaseui";
import { Link, Paper } from "@mui/material";
import { setUserDataEdit } from "../UserDataDialog/UserDataSlice";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

const pages = ['Home', 'About', 'Dashboard'];
const settings = ['Logout']

const NavBar: React.FC = () => {

    const storage = getStorage();

    const firebase = useFirebase()
    // const organizations = useAppSelector(state => state.firebase.data.organizations)
    // console.log(organizations)
    // useFirebaseConnect({ path: "organization" })
    // console.log(useAppSelector(state => state.firebase.data.organization))

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const auth = useAppSelector((state) => state.firebase.auth)

    const users = useAppSelector((state) => state.firebase.data.users)

    return (
        <AppBar position="static" style={{ background: '#374785' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: '3rem',
                            width: '3rem',
                            display: { xs: 'none', md: 'flex' },
                            mr: 1

                        }}
                        alt="Site Logo"
                        src={LOGO_IMG_LOCATION}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FutureForward
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    {/* navigate to="/page" */}
                                    <Typography textAlign="center">{page}</Typography>
                                    <Link key={page} href={page} underline="none">
                                        <Button
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    </Link>
                                </MenuItem>
                                // 'Home', 'About', 'Dashboard/Profile'
                            ))}
                            {/* <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{'Home'}</Typography>
                            </MenuItem>
                            <MenuItem key={'About'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{'About'}</Typography>
                            </MenuItem>
                            {isLoaded(auth) && !isEmpty(auth) 
                                ?
                                <MenuItem key={'Dashboard/Profile'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{'Dashboard/Profile'}</Typography>
                                </MenuItem>
                                : <></>
                            } */}

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontSize: 14,
                            // flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FutureForward
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            page != 'Dashboard' ||
                                (page == 'Dashboard' && auth.uid) ?
                                <Link key={page} href={page} underline="none">
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                                :
                                <Link key={"Test"}></Link>
                        ))}
                    </Box>

                    <NavSetting />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const NavSetting: React.FC = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const auth = useSelector((state: PersistState) => state.firebase.auth)
    // #region LoginButton
    const firebase = useFirebase();
    const storage = getStorage();
    const initPic = useSelector((state: PersistState) => state.userData)
    const [url, setURL] = useState<string>('');

    if (isEmpty(auth)) {
        return (
            <Box>
                <StyledFirebaseAuth uiConfig={{
                    // Popup signin flow rather than redirect flow.
                    signInFlow: 'popup',
                    // We will display Google and Facebook as auth providers.
                    signInOptions: [
                        GoogleAuthProvider.PROVIDER_ID,
                    ],
                    callbacks: {
                        // Avoid redirects after sign-in.
                        signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
                            console.log(authResult.additionalUserInfo.isNewUser)
                            if (authResult.additionalUserInfo.isNewUser) {
                                store.dispatch(setUserDataEdit(true))
                            }
                            return false;
                        },
                    },
                }} firebaseAuth={firebase.auth()} />
            </Box>)
    }
    // #endregion

    // #region NavMenuItem
    if (initPic.profilePic !== '') {
        getDownloadURL(ref(storage, `${initPic.profilePic}`))
            .then((url) => {
                setURL(url)
            })
            .catch((error) => {
                setURL('')
            })
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleSignOut = () => {
        console.log("signing out");
        signOut(getAuth());
    }
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={auth.displayName ? `${auth.displayName} User Avatar` : 'User Avatar'} component={Paper} src={url} elevation={3} sx={{ width: 50, height: 50 }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem key={"Edit Profile"} onClick={() => { handleCloseUserMenu(); store.dispatch(setUserDataEdit(true)) }}>
                    <Typography textAlign="center">Edit Profile</Typography>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={() => { handleCloseUserMenu(); handleSignOut() }}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
    // #endregion
}

export default NavBar


