import { fireEvent, render, waitFor } from '@testing-library/react';

import Modal from './Modal';

describe('Modal component unit tests', () => {
  const onCloseMock = jest.fn();
  const mockProps = {
    id: 'test-modal',
    show: true,
    onClose: onCloseMock,
    dismissible: true,
    size: 'large',
    popup: true,
    initialFocus: 'button',
    position: 'center',
    className: 'custom-modal',
    testId: 'test-modal',
  };
  const { getByTestId } = render(<Modal {...mockProps} />);
  it('should render Modal component with required props', () => {
    waitFor(() => {
      const modalComponent = getByTestId('test-modal');
      expect(modalComponent).toBeInTheDocument();
      expect(modalComponent).toHaveClass('custom-modal');
    });
  });
  it('should execute onClose function when the modal is closed', () => {
    waitFor(() => {
      const modalComponent = getByTestId('test-modal');
      fireEvent.click(modalComponent);
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
