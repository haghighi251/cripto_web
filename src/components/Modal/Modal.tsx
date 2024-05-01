import { Modal as FlowbiteModal } from 'flowbite-react';
import { forwardRef } from 'react';

import { ModalProps } from '@/types/types/components/modal';

const Modal = forwardRef<any, ModalProps>(
  (
    {
      id,
      show,
      onClose,
      dismissible,
      size,
      popup,
      initialFocus,
      position,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: ModalProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteModal
        id={id}
        show={show}
        onClose={onClose}
        dismissible={dismissible}
        size={size}
        popup={popup}
        initialFocus={initialFocus}
        position={position}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteModal>
    );
  },
);

export default Modal;
