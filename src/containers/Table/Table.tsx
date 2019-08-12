import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Loader from 'react-loader-spinner';

import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';

import { getContacts } from '../../store';
import { tableData } from '../../data';

import * as styles from './Table.module.scss'

type Props = {
    contacts: Contact[],
    isLoading: boolean,
    loadContacts: () => void
}

class Table extends React.Component<Props, Object> {

    componentDidMount = async () => {
        const { loadContacts } = this.props;
        await loadContacts();
    }

    renderTableHeader = (headers: Object) => {
        const headerValues = Object.values(headers);
    
        return headerValues.map((value, i) => {
            return <TableHeader key={i} value={value} />
        });
    }

    renderTableRows = (contact: Contact, headers: Object) => {
        const headerValues = Object.values(headers);
            return <TableRow key={contact.id} contact={contact} columns={headerValues} />
    }

    render(): React.ReactNode {
        const { contacts, isLoading } = this.props;
        return (
            !isLoading && contacts.length > 0 ? (
                <table className={styles.block}>
                    <thead className={styles.head}>
                        <tr className={styles.headRow}>
                            {this.renderTableHeader(tableData.headers)}
                        </tr>
                    </thead>
                    <tbody className={styles.bodyBlock}>
                        {contacts.map((contact) => (
                            this.renderTableRows(contact, tableData.headers)
                        ))}
                    </tbody>
                </table>
            ) :
            <div className={styles.loader}>
                <Loader
                    type="TailSpin"
                    color="#3c53d8"
                    height="100"
                    width="100"
                />
            </div>
        );
    }
}

const mapState = (state: StoreState) => (
    {
        contacts: state.contacts.contactsList,
        isLoading: state.contacts.isLoading,
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
