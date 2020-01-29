import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './index';
import { findByTestAtr } from '../../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<HomePage {...props} />);
    return component;
};

describe('HomePage Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'home-page');
        expect(wrapper.length).toBe(1);
    });

    
});
