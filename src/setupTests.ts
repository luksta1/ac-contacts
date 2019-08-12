import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

(enzyme as any).configure({ adapter: new Adapter() });