import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useApp } from "./AppContext";

function App() {
  const navigate = useNavigate();
  const appContext = useApp();

  const fetchHandler = async () => {
    appContext.fetchPersons("persons");
    console.log(appContext.persons);
    navigate("/fetch");
  };

  const historyHandler = () => {
    appContext.fetchPersons("randomPersons");

    navigate("/history");
  };

  return (
    <div className="App">
      <Button onClick={fetchHandler} variant="primary">
        Fetch
      </Button>
      <Button onClick={historyHandler} variant="secondary">
        History
      </Button>
    </div>
  );
}

export default App;
