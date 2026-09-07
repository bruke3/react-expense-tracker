function ExpenseSummary({ total }) {
    return (
        <div className="total">
            <p>Total Spent</p>
            <h2>${total.toFixed(2)}</h2>
        </div>
    );
}

export default ExpenseSummary;