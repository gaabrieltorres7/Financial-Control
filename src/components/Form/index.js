import React from "react";
import Grid from "../Grid";
import * as S from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isExpense, setExpense] = React.useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <S.Container>
        <S.InputContent>
          <S.Label>Description</S.Label>
          <S.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </S.InputContent>
        <S.InputContent>
          <S.Label>Amount</S.Label>
          <S.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </S.InputContent>
        <S.RadioGroup>
          <S.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rIncome">Deposit</S.Label>
          <S.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rExpenses">Expense</S.Label>
        </S.RadioGroup>
        <S.Button onClick={handleSave}>ATTACH</S.Button>
      </S.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
