import { act, fireEvent, render, screen } from '@testing-library/react';
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
    it('Renders sucessfully', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen).toBeTruthy();
    });
    it('Show Filter Button', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.getByText("Show Filter")).toBeTruthy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.queryByText('Show Filter')).toBeFalsy();
    });
    it('Hide Filter Button', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.getByText("Show Filter")).toBeTruthy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.queryByText('Show Filter')).toBeFalsy();
        expect(screen.getByText('Hide Filter')).toBeTruthy();
        fireEvent.click(
            screen.getByText('Hide Filter')
        )
        expect(screen.queryByText('Hide Filter')).toBeFalsy();
    });


    it('Filter Bar No Filter', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
    });

    it('Filter Bar No Interests', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Interests")).toBeFalsy();
    })
    it('Filter Bar No Accessibility', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
    })
    it('Filter Bar Default State', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
    })
    it('Filter Bar Show Filters', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.getByText("Filters")).toBeTruthy();
    });
    it('Filter Bar Show Interests', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.getByText("Interests")).toBeTruthy();
    })
    it('Filter Bar Show Accessiblities', ()=> {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.getByText("Accessibilities")).toBeTruthy();
    })
    it('Filter Bar Show Filters, Interests, Accesiblities', () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.getByText("Filters")).toBeTruthy();
        expect(screen.getByText("Interests")).toBeTruthy();
        expect(screen.getByText("Accessibilities")).toBeTruthy();
    })
    it('Filter Bar Switch On and Off', ()=> {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )
        expect(screen.getByText("Filters")).toBeTruthy();
        expect(screen.getByText("Interests")).toBeTruthy();
        expect(screen.getByText("Accessibilities")).toBeTruthy();
        fireEvent.click(
            screen.getByText('Hide Filter')
        )
        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
    })
    it("Resizing the window should change the Homepage", () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        );
        act(() => {
            window.innerWidth = 500;
        });
        fireEvent.resize(window);
        expect(screen.getByTestId('small')).toBeTruthy();

        act(() => {
            window.innerWidth = 1000;
        });
        fireEvent.resize(window);
        expect(screen.queryByTestId('small')).toBeFalsy();
    });
    it("Small Homepage shows filter", () => {
        render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <HomePage2 />
                </ReactReduxFirebaseProvider>
            </Provider>
        )
        act(() => {
            window.innerWidth = 500;
        });
        fireEvent.resize(window);

        expect(screen.queryByText("Filters")).toBeFalsy();
        expect(screen.queryByText("Interests")).toBeFalsy();
        expect(screen.queryByText("Accessibilities")).toBeFalsy();
        fireEvent.click(
            screen.getByText('Show Filter')
        )   
        expect(screen.getByText("Filters")).toBeTruthy();
        expect(screen.getByText("Interests")).toBeTruthy();
        expect(screen.getByText("Accessibilities")).toBeTruthy();
        fireEvent.click(
            screen.getByText('Hide Filter')
        )
    });
});
