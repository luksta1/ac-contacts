import React from 'react';
import { formatTableHeader } from '../../helpers';

import * as styles from './TableHeader.module.scss'

type Props = {
    value: string,
}

const TableHeader = (props: Props) => {
    const { value } = props;

    return (
        <th className={styles.block}>
            <h1 className={styles.header}>
                {formatTableHeader(value)}
            </h1>
        </th>
    );
}

export default TableHeader;
