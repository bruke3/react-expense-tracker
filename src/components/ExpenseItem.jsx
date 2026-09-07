function ExpenseItem({ expense, deleteExpense }) {
    return (
        <div className="expense">
            <div>
                <h3>{expense.name}</h3>
                <p>Amount: ${expense.amount.toFixed(2)}</p>
                <p>Category: {expense.category}</p>
            </div>

            <button
            className="delete-button"
            onClick={() => deleteExpense(expense.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default ExpenseItem;