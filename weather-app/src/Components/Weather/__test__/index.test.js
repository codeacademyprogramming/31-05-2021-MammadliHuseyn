import Weather from "./../index.js";
import ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';


test('works great', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Weather />, root);
    const { getByText } = getQueriesForElement(root);

    expect(getByText('Simple Weather App')).not.toBeUndefined();
});
