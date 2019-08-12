import React from 'react';
import classnames from 'classnames';
import { formatContact } from '../../helpers';

import * as styles from './TableRow.module.scss';

type Props = {
    contact: Contact,
    columns: string[],
}

const TableRow = (props: Props) => {
    const { contact, columns } = props;
    const formattedContact = formatContact(contact);
    console.log(columns)
    return (
        <tr className={styles.block}>
            {columns.map((column, i) => (
                <td key={i} className={classnames(
                    styles.cell,
                    {[`${styles.cellContact}`] : column === 'contact'},
                    {[`${styles.cellTotalValue}`] : column === 'totalValue'},
                    {[`${styles.cellLocation}`] : column === 'location'},
                    {[`${styles.cellDeals}`] : column === 'deals'},
                    {[`${styles.cellTags}`] : column === 'tags'},
                )}>
                    <h2>
                        {formattedContact[column]}
                    </h2>
                </td>
            ))}
        </tr>
    );
}

export default TableRow;
