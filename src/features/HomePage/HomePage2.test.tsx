import { render } from '@testing-library/react';
import HomePage2 from './HomePage2';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('HomePage2', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Provider store={store}>
                <HomePage2 />
            </Provider>
        );
        expect(baseElement).toBeTruthy();
    });
});