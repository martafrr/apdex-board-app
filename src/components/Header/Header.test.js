import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './index';
import { findByTestAtr, testStore } from '../../utils/test-utils';

const setup = (props = {}, initialState={}) => {
    const mockStore = testStore(initialState);
    const component = shallow(<Header {...props} store={mockStore} />);
    return component;
};

describe('Header Component', () => {
    let component;
    const mockProps = {
        changeLayout: () => {},
        isAwesomeGrid: false,
    }
    beforeEach(() => {
        component = setup(mockProps);
    });

    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'header');
        expect(wrapper.length).toBe(1);
    });

    it('should render the logo image', () => {
        const wrapper = findByTestAtr(component, 'logo');
        expect(wrapper.length).toBe(1);
    });
});
