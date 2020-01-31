import React from 'react';
import { shallow } from 'enzyme';
import {AppModal} from './index';
import { findByTestAtr, testStore } from '../../utils/test-utils';

const setup = (initialState = {}, props={}) => {
    const mockStore = testStore(initialState)
    const component = shallow(<AppModal store={mockStore} {...props} />);
    return component;
};

describe('AppModal Component', () => {
    let component;
    const initialState = {
        hosts: {
            host1: [{name: 'app1', apdex: 1}],
            host2: [{name: 'app2', apdex: 1}],
        }
    }
    const mockOnClose = jest.fn();
    const mockRemoveHostOnly = jest.fn();
    const mockRemoveAllHosts = jest.fn();
    const mockProps = {
        appInfo: {
            name: "Cars and co.",
            contributors:["Maria","Anna"],
            version:7,
            apdex:68,
            host:["host1","host2","host3"]
        },
        appsIndex: 0, 
        hostName: "host1", 
        isOpen: true, 
        onClose: mockOnClose, 
        removeAppFromHostOnly: mockRemoveHostOnly,
        removeAppFromAllHosts: mockRemoveAllHosts,
    }
    beforeEach(() => {
        component = setup(initialState, mockProps);
    });

    it('should render if isOpen is true', () => {
        const wrapper = findByTestAtr(component, 'modal-window');
        expect(wrapper.length).toBe(1);
    });

    it('should not render if isOpen is false', () => {
        component = setup(initialState, {...mockProps, isOpen: false});
        const wrapper = findByTestAtr(component, 'modal-window');
        
        expect(wrapper.length).toBe(0);
    });

    it('should emit callback on click close modal', () => {
        const closeModalButton = findByTestAtr(component, 'close-modal-button');
        closeModalButton.simulate('click');
        const callback = mockOnClose.mock.calls.length;

        expect(callback).toBe(1);
    });

    it('should emit callback on click remove app only on host', () => {
        const closeModalButton = findByTestAtr(component, 'remove-host-only-button');
        closeModalButton.simulate('click');
        const callback = mockRemoveHostOnly.mock.calls.length;

        expect(callback).toBe(1);
    });
    
    it('should emit callback on click remove app only on host', () => {
        const closeModalButton = findByTestAtr(component, 'remove-all-hosts-button');
        closeModalButton.simulate('click');
        const callback = mockRemoveAllHosts.mock.calls.length;

        expect(callback).toBe(1);
    });


});
