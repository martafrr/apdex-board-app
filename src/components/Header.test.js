import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtr } from '../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
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
