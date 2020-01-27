import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import { findByTestAtr } from '../utils/test-utils';

const wrapper = (props = {}) => {
    const component = shallow(<HomePage {...props} />);
    return component;
};

describe('HomePage Component', () => {
    let component;
    beforeEach(() => {
        component = wrapper();
    });

    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'home-page');
        expect(wrapper.length).toBe(1);
    });
});