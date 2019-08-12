import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TableHeader from '../TableHeader';


describe('TableHeader component', () => {
    const props = {
        value: 'Header'
    }

    it('renders without crashing', () => {
        const tr = document.createElement('tr');
        ReactDOM.render(<TableHeader {...props} />, tr);
        ReactDOM.unmountComponentAtNode(tr);
    });

    let component: any;

    beforeEach(() => {
        component = shallow(
            <TableHeader {...props} />
        );
    })

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('has renders a <th> element', () => {
        expect(component.find('th').length).toEqual(1);
    });
})