import { fireEvent, getByText, render, screen } from '@testing-library/react';
import './matchmedia.mock';
import HomePage2 from './HomePage2';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzmolqh8q8BBGWrZKBoxW-sOjCa6Uihzg",
    authDomain: "future5-7a3d2.firebaseapp.com",
    projectId: "future5-7a3d2",
    storageBucket: "future5-7a3d2.appspot.com",
    messagingSenderId: "437088556082",
    appId: "1:437088556082:web:ba572c17fd9b1d4200182b"
};
firebase.initializeApp(firebaseConfig);

const rrfConfig = {
    userProfile: 'users'
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
}


describe('HomePage2', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(baseElement).toBeTruthy();
    });
    it ('Should show correct button', () => {
        const { baseElement } = render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        fireEvent(
            getByText(baseElement, 'Show Filter'),
            new MouseEvent('click')
        )
        expect(getByText(baseElement, 'Show Filter')).tobe})
});
