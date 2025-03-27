import React from "react";
import { Container, LabelCard } from "./styleComponents";

interface BalanceItem {
  tag: string;
  saldo: number;
}

interface BalanceCardProps {
  data: BalanceItem; // The type of the `data` prop
}

export default function BalanceCard({ data }: BalanceCardProps) {
  return (
    <Container>
      <LabelCard>vai dar certo</LabelCard>
    </Container>
  );
}
