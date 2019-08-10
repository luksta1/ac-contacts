import React from 'react';
import { Provider } from 'react-redux';
import Table from '../Table';
import store from '../../store';

class App extends React.Component<Object, Object> {
    render(): React.ReactNode {
        return (
            <Provider store ={store}>
                <Table />
            </Provider>
          );
    }
}
export default App;
