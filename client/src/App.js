import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
