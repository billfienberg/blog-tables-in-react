import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// https://github.com/facebook/jest/issues/3687#issuecomment-325373305
Object.values = (obj) => Object.keys(obj).map(key => obj[key])
