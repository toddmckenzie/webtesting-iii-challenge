// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls'
import '@testing-library/react/cleanup-after-each';

describe('<Controls />', () => {
    it('changes close gate to open gate', async () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        let button = getByText(/close gate/i);
        fireEvent.click(button)
        const promise = getByText(/close gate/i)
        await promise;

        
    })
    it('changes close gate and locked gate to unlocked',  () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        let button = getByText(/unlock gate/i);
        fireEvent.click(button);
        getByText(/lock gate/i)

    })
    it('changes open gate to close gate', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        let button = getByText(/close gate/i);
        fireEvent.click(button);
        setTimeout(() => {
            getByText(/open gate/i)
        })
       
    })
    it('changes closed and unlocked to locked gate', () => {
        const { getByText } = render(<Controls locked={false} closed={true} />);
        let button = getByText(/lock gate/i);
        fireEvent.click(button);
        setTimeout(() => {
            getByText(/unlock gate/i)
        })
        
    })
})
//need to change code (setTimeouts) to promises/ not sure how to write.


