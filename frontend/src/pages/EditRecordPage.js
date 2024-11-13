import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecord, updateRecord } from "../store/features/recordsSlice";

function EditRecordPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const record = useSelector((state) =>
    state.records.records.find((record) => record.id === parseInt(id))
  );
  const [text, setText] = useState(record?.text || "");
  const [choice, setChoice] = useState(record?.choice || "");

  useEffect(() => {
    if (!record) {
      dispatch(getRecord(id));
    } else {
      setText(record.text);
      setChoice(record.choice);
    }
  }, [dispatch, id, record]);

  const handleUpdateRecord = (e) => {
    e.preventDefault();

    dispatch(updateRecord({ id, recordData: { text, choice } }));
  };

  if (!record) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Record</h2>

      <form action="" method="PUT">
        <textarea
          rows="5"
          cols="30"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="CHOICE_1">Choice 1</option>
          <option value="CHOICE_2">Choice 2</option>
          <option value="CHOICE_3">Choice 3</option>
        </select>

        <button onClick={handleUpdateRecord}>Save</button>
      </form>

      <br /><br /><br />

      <a href="/">Home page</a>
    </div>
  );
}

export default EditRecordPage;
