import React from "react";
import MainItem from "../MainItem";
import * as S from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Main = ({ income, expense, total }) => {
  return (
    <S.Container>
      <MainItem title="Deposit" Icon={FaRegArrowAltCircleUp} value={income} />
      <MainItem
        title="Expense"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <MainItem title="Amount" Icon={FaDollarSign} value={total} />
    </S.Container>
  );
};

export default Main;
