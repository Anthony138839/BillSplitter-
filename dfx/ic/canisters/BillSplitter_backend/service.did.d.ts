import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Expense {
  'id' : ExpenseId,
  'participants' : Array<string>,
  'date' : Time,
  'description' : string,
  'amount' : bigint,
}
export type ExpenseId = bigint;
export type Time = bigint;
export interface _SERVICE {
  'addExpense' : ActorMethod<[string, bigint, Array<string>], ExpenseId>,
  'getAllExpenses' : ActorMethod<[], Array<Expense>>,
  'getExpense' : ActorMethod<[ExpenseId], [] | [Expense]>,
  'getExpensesByParticipant' : ActorMethod<[string], Array<Expense>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
