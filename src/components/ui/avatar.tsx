"use client";

import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import * as React from "react";

export interface AvatarProps extends ChakraAvatar.RootProps {
  name?: string;
  src?: string;
  icon?: React.ReactElement;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, icon, children, ...rest } = props;
    return (
      <ChakraAvatar.Root ref={ref} {...rest}>
        {src && <ChakraAvatar.Image src={src} alt={name} />}
        {icon || <ChakraAvatar.Fallback>{name}</ChakraAvatar.Fallback>}
        {children}
      </ChakraAvatar.Root>
    );
  }
);