import { NavbarLink as FlowbiteNavbarLink } from 'flowbite-react';
import { forwardRef } from 'react';

import { iNavbarLinkProps } from '@/types/types/components/navbar';

const NavbarLink = forwardRef<any, iNavbarLinkProps>(
  (
    {
      id,
      className,
      href,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iNavbarLinkProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbarLink
        id={id}
        className={className}
        href={href}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteNavbarLink>
    );
  },
);

export default NavbarLink;
