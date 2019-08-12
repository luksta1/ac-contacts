import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TableRow from '../TableRow';


describe('TableHeader component', () => {
    const props = {
        contact: {
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
        },
        columns: ['col1', 'col2', 'col3']
    }

    it('renders without crashing', () => {
        const tBody = document.createElement('tbody');
        ReactDOM.render(<TableRow {...props} />, tBody);
        ReactDOM.unmountComponentAtNode(tBody);
    });

    let component: any;

    beforeEach(() => {
        component = shallow(
            <TableRow {...props} />
        );
    })

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('has renders a <tr> element', () => {
        expect(component.find('tr').length).toEqual(1);
    });

    it('has renders a <td> element for each column', () => {
        expect(component.find('td').length).toEqual(3);
    });
})