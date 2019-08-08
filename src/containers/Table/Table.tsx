import React from 'react';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';

class Table extends React.Component<Object, Object> {
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
export default Table;
