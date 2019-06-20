import React from 'react';
import { render  } from '@testing-library/react';
import Display from './Display'
import '@testing-library/react/cleanup-after-each';

describe('<Display />', () => {
    it('changes close gate to open gate', async () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText(/Unlocked/i);
        getByText(/Open/i);
        
    })
    it('changes close gate to open gate', async () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText(/Locked/i);
        getByText(/Closed/i);
        
    })
    it('changes close gate to open gate', async () => {
        const { getByText } = render(<Display locked={false} closed={true} />);
        getByText(/Unlocked/i);
        getByText(/Closed/i);
        
    })


})