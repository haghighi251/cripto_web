import { render, waitFor } from '@testing-library/react';

import Toast from './Toast';

describe('Toast component', () => {
  it('should render Toast component with required props', () => {
    const mockProps = {
      id: 'test-toast',
      className: 'custom-toast',
      testId: 'test-toast',
    };
    const { getByTestId } = render(<Toast {...mockProps}>Test message</Toast>);
    waitFor(() => {
      const toastComponent = getByTestId('test-toast');
      expect(toastComponent).toBeInTheDocument();
      expect(toastComponent).toHaveTextContent('Test message');
      expect(toastComponent).toHaveClass('custom-toast');
    });
  });
});
