import React from 'react';
import { shallow } from 'enzyme';
import { HostPage } from './index';
import { findByTestAtr } from '../../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<HostPage {...props} />);
    return component;
};

describe('HostPage Component', () => {
    let component;
    const mockAddAppToHost = jest.fn();
    const mockClearForm = jest.fn();
    const mockProps = {
        match: {
            params: {
                host_name: 'host1'
            }
        },
        addAppToHost: mockAddAppToHost,
        clearForm: mockClearForm,
        hostInfo: [
            { name: 'app 1', apdex: 100 }, 
            { name: 'app 2', apdex: 99 }
        ],
    };

    beforeEach(() => {
        component = setup(mockProps);
    });

    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'host-page');
        expect(wrapper.length).toBe(1);
    });

    it('toggleAddForm should update state as expected', () => {
        const classInstance = component.instance();
        classInstance.toggleAddForm();
        const newState = classInstance.state.isAddAppFormVisible;
        expect(newState).toBe(true);
    }); 

    it('handleAddAppForm calls addAppToHost and clearForm', () => {
        const formValues = {
            name: 'newApp', 
            contributors: 'Joan Doe, John Doe', 
            version: '1', 
            apdex: '100', 
            hosts: 'some.host, some.other'
        }
        const classInstance = component.instance();
        classInstance.handleAddAppForm(formValues);
        const addAppToHost = mockAddAppToHost.mock.calls.length;
        const clearForm = mockClearForm.mock.calls.length;
        expect(addAppToHost).toBe(1);
        expect(clearForm).toBe(1);
    });

    it('handleEditClick should update state as expected', () => {
        const classInstance = component.instance();
        classInstance.handleEditClick();
        const newState = classInstance.state.isEditAppFormVisible;
        expect(newState).toBe(true);
    }); 

    it('getTopAppsByHost should return an array of the apps', () => {
        const classInstance = component.instance();
        const appsArray = classInstance.getTopAppsByHost();
        expect(appsArray.length).toBe(2);
    }); 
});
