import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';


describe('App Function',()=>{

    afterEach(cleanup);

    it('should call fileList',()=>{
        const { getByTestId } = render(<App />);
        expect(getByTestId('app')).toBeTruthy();
    })

})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
