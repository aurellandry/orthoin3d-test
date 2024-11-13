import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords, deleteRecord } from "../store/features/recordsSlice";
import RecordTable from "../components/RecordTable";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records.records);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  const handleDeleteRecord = (id) => {
    dispatch(deleteRecord(id));
  };

  return (
    <div>
      <h1>Record Website</h1>
      <hr />

      <Link to={"/create"}>
        <button>Create record</button>
      </Link>
      <br /><br />

      <RecordTable records={records} deleteRecord={handleDeleteRecord} />
    </div>
  );
}

export default HomePage;
