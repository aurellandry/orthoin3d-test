import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditRecordPage from "./pages/EditRecordPage";
import "./App.css";
import CreateRecordPage from "./pages/CreateRecordPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateRecordPage />} />
          <Route path="/edit/:id" element={<EditRecordPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
