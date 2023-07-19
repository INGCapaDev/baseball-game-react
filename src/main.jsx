import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AudioContextProvider from "./context/audio.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AudioContextProvider>
      <App />
    </AudioContextProvider>
  </Provider>
);
