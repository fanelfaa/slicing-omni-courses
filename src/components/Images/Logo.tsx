import type { ImageProps } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export const ImageLogo = (props: ImageProps) => (
  <Image
    src="/assets/icons/Logo.svg"
    alt="Logo Omni."
    boxSize="34px"
    {...props}
  />
);
