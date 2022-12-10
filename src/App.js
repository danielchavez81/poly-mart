import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
