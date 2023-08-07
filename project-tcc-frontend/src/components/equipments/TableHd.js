function TableHd ({ columns }) {
    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor }) => {
                    return <th key={accessor}>{label}</th>;
                })}
            </tr>
        </thead>
    );
};

export default TableHd;