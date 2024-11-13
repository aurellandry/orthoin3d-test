import { Link } from "react-router-dom";

function RecordTable({ records, deleteRecord }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Text</th>
          <th>Choice</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.text}</td>
            <td>{record.choice_label}</td>
            <td>
              <Link to={`/edit/${record.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteRecord(record.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecordTable;
