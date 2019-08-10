import React from 'react';
import { formatContact } from '../../helpers';

type Props = {
    contact: Contact,
    columns: string[],
}

const TableRow = (props: Props) => {
    const { contact, columns } = props;
    const formattedContact = formatContact(contact);

    return (
        <tr>
            {columns.map((column, i) => (
                <td key={i}>
                    {formattedContact[column]}
                </td>
            ))}
        </tr>
    );
}

export default TableRow;
