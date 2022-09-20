import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

type LinkProps = {
  children?: ReactNode;
  href: string;
} & ChakraLinkProps;

export const Link = ({ href, children, ...otherProps }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink _hover={{ border: 'none' }} {...otherProps}>
      {children}
    </ChakraLink>
  </NextLink>
);
