import React, { useState, useContext } from 'react';
import { TransactionContext } from './context';

function Child() {

    const { transactions, addTransaction } = useContext(TransactionContext);
    const { deleteTransaction } = useContext(TransactionContext)
    // let [transactions, setTransaction] = useState(transactions);
    let [newid] = useState(1)
    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({ id:newid,amount: Number(newAmount), desc: newDesc })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    

    return (
        <div>
        <h1 className="Header">Expense Tracker </h1>
        <div className="container">
            <h4> Your Total Balance : <br /> <h1 className="font-color">PKR {getIncome() + getExpense()}</h1></h4>
            <div className="margin">
            <div className="inc-expcontainer">
                <h3 className="text-Color">Income <br /> <h3>{getIncome()} PKR</h3> </h3></div>
                <div className="inc-expcontainer2">
                    <h3 className="text-Color2">Expense <br /><h3>{getExpense()} PKR</h3></h3>
                    </div></div>
                    <br />
            <h3>History</h3>
            <hr />

            <ul className="list">
                {transactions.map((transaction, ind) => {
                    return (
                        <li className={transaction.amount < 0 ? 'minus':'plus'} key={ind}>
                            <span> {transaction.desc} </span>
                            <span> {transaction.amount} PKR </span>
                            <button onClick={()=>deleteTransaction(transaction.id)}className="delete-btn">X</button>
                        </li>
                    )
                })}
            </ul>

            <h4>Add New Transaction</h4>
            <hr />

            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>
                    Description <br /><br />
                    <input type='text'htmlFor="Description" placeholder="Enter Text..." required onChange={(e) => setNewDesc(e.target.value)} />
                </label>

                <br />

                <label>
                    Amount <br />
                    (for expense: - , for income: +)
                    <input type='number' id ="Transaction Amount"
                        placeholder="0" required onChange={(e) => setNewAmount(e.target.value)} />
                </label>

                <br /> <br />

                <input type="submit" value="Add transaction" className="btn" />

            </form>
        </div>
        </div>
    );
}

export default Child;