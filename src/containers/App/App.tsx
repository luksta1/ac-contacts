import React from 'react';
import { Provider } from 'react-redux';
import { Table } from '../Table';
import store from '../../store';

import * as styles from './App.module.scss'

class App extends React.Component<Object, Object> {
    render(): React.ReactNode {
        return (
            <Provider store ={store}>
                <main className={styles.block}>
                    <Table />
                </main>
            </Provider>
          );
    }
}
export default App;
