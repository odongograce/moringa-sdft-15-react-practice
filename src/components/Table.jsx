export default function Table({ expenses }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Expense</td>
                    <td>Amount</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>

                {
                    expenses.map((expense, index) =>
                    (<tr key={expense.id}>
                        <td>{index+1}</td>
                        <td>{expense.expense}</td>
                        <td>{expense.amount}</td>
                        <td>
                            <button className='btn btn-sm btn-danger'>x</button>
                        </td>
                    </tr>))
                }

            </tbody>
        </table>
    )
}