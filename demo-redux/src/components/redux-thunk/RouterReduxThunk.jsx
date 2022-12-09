import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storeThunk from "../../redux/storeThunk";
import Login from "./Login";
import Users from "./Users";
const RouterReduxThunk = () => {
  return (
    <Provider store={storeThunk}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default RouterReduxThunk;
