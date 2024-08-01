import Form from "./components/Form";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import List from "./components/List";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
