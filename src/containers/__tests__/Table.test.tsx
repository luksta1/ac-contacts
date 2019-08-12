import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { disconnectedTable as Table } from '../Table';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';

const props = {
    contacts: [
        {
            contact: 'Test Name',
            deals: 2,
            id: '27',
            location: {
                city: 'Chicago',
                state: 'Illinois',
                country: 'US',
            },
            tags: ['tag'],
            totalValue: 11200
        }
    ],
    isLoading: false,
    loadContacts: jest.fn(),
}

describe('Table component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Table {...props} />, div);
    });

    let component: any;

    beforeEach(() => {
        component = shallow(
            <Table {...props} />
        );
    })

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('has a table header with 5 columns', () => {
        expect(component.find(TableHeader).length).toEqual(5);
    });

    it('renders table rows', () => {
        expect(component.find(TableRow).length).toBeGreaterThan(0);
    });
});