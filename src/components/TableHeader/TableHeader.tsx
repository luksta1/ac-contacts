import React from 'react';
import { formatTableHeader } from '../../helpers';

import * as styles from './TableHeader.module.scss'

type Props = {
    headers: string[],
}

const TableHeader = (props: Props) => {
    const { headers } = props;

    return (
        <div className={styles.block}>
            {headers.map((headerValue) => (
                <div key={headerValue} className={styles.columnHeader}>
                    <h1 className={styles.header}>
                        {formatTableHeader(headerValue)}
                    </h1>
                </div>
            ))
            }
        </div>
    );
}

export default TableHeader;
