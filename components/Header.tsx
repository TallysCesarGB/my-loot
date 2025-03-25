import React from "react";
import { HeaderComponent, HeaderTitle } from "./styleComponents";
import { Background } from "@/src/styles/styleSingInUP";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Background>
      <HeaderComponent>
        {title && <HeaderTitle>{title}</HeaderTitle>}
      </HeaderComponent>
    </Background>
  );
}
