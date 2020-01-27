import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { findByTestAtr } from '../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<Navbar {...props} />);
    return component;
};

describe('Navbar Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });

    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'navbar');
        expect(wrapper.length).toBe(1);
    });

    it('should render the logo image', () => {
        const wrapper = findByTestAtr(component, 'logo');
        expect(wrapper.length).toBe(1);
    });
});
