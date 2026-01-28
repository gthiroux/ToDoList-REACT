import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parameter from "./pages/Parameter/Parameter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/parametre" exact element={<Parameter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
