import React, { useMemo } from "react";
import { Balance, Container, LabelCard } from "./styleComponents";

interface BalanceItem {
  tag: string;
  saldo: number;
}

interface BalanceCardProps {
  data: BalanceItem; // The type of the `data` prop
}

export default function BalanceCard({ data }: BalanceCardProps) {
  const cardStyle = useMemo(() => {
    if (data.tag === "saldo") {
      return {
        label: "Saldo",
        color: "3b3dbf",
      };
    } else if (data.tag === "receita") {
      return {
        label: "Entradas",
        color: "00b94a",
      };
    } else {
      return {
        label: "Saídas",
        color: "ef463a",
      };
    }
  }, [data]);

  return (
    <Container bg={cardStyle.color}>
      <LabelCard> {cardStyle.label} </LabelCard>
      <Balance>R$ {data.saldo} </Balance>
    </Container>
  );
}
