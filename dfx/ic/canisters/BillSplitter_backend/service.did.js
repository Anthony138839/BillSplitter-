export const idlFactory = ({ IDL }) => {
  const ExpenseId = IDL.Nat;
  const Time = IDL.Int;
  const Expense = IDL.Record({
    'id' : ExpenseId,
    'participants' : IDL.Vec(IDL.Text),
    'date' : Time,
    'description' : IDL.Text,
    'amount' : IDL.Nat,
  });
  return IDL.Service({
    'addExpense' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Vec(IDL.Text)],
        [ExpenseId],
        [],
      ),
    'getAllExpenses' : IDL.Func([], [IDL.Vec(Expense)], ['query']),
    'getExpense' : IDL.Func([ExpenseId], [IDL.Opt(Expense)], ['query']),
    'getExpensesByParticipant' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(Expense)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
