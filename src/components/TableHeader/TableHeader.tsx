import React from 'react';
import { formatTableHeader } from '../../helpers';

type Props = {
    value: string,
}

const TableHeader = (props: Props) => {
    const { value } = props;

    return (
        <th>
            {formatTableHeader(value)}
        </th>
    );
}

export default TableHeader;
