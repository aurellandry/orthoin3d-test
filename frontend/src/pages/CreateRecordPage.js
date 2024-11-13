import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecord } from "../store/features/recordsSlice";

function CreateRecordPage() {
  const AVAILABLE_CHOICES = [
    {
      key: "CHOICE_1",
      label: "Choice 1",
    },
    {
      key: "CHOICE_2",
      label: "Choice 2",
    },
    {
      key: "CHOICE_3",
      label: "Choice 3",
    },
  ];

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [choice, setChoice] = useState(AVAILABLE_CHOICES[0].key);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addRecord({ text, choice }));
    setText("");
    setChoice(null);
  };

  return (
    <div>
      <h2>Create Record</h2>

      <form action="" method="POST">
        <textarea
          rows="5"
          cols="33"
          placeholder="Record Text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> <br />

        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          {
            AVAILABLE_CHOICES.map((ch) => (
              <option key={ch.key} value={ch.key}>{ch.label}</option>
            ))
          }
        </select><br />

        <button type="submit" onClick={handleSubmit}>Create record</button>
      </form>

      <br /><br /><br />

      <a href="/">Home page</a>
    </div>
  );
}

export default CreateRecordPage;
