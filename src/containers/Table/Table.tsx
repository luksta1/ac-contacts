import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';

import { getContacts } from '../../store';

type Props = {
    contacts: Contact[],
    loadContacts: () => void
}

class Table extends React.Component<Props, Object> {

    componentDidMount = () => {
        const { loadContacts } = this.props;
        loadContacts();
    }

    render(): React.ReactNode {
        return (
            <main>
                <table>
                    <tbody>
                        <TableHeader />
                        <TableRow />
                    </tbody>
                </table>
            </main>
        );
    }
}

const mapState = (state: StoreState) => (
    {
        contacts: state.contacts.contactsList,
    }
)

const mapDispatch = (dispatch: Dispatch) => (
    {
        loadContacts() {
            dispatch<any>(getContacts());
        }
    }
)
export default connect(mapState, mapDispatch)(Table);
