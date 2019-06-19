// Test away!
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls.js'

describe('<Controls />', () => {
    it('changes close gate to open gate', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        const button = getByText('Close');
        fireEvent.click(button);
        expect(button).toContainText('Open Gate');

    })
    it('changes close gate and locked gate to unlocked', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        const button = getByText('Unlock Gate');
        fireEvent.click(button);
        expect(button).toContainText('Lock Gate');

    })
    it('changes open gate to close gate', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        const button = getByText('Close Gate');
        fireEvent.click(button);
        expect(button).toContainText('Open Gate');

    })
})


