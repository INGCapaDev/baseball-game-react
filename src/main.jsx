import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AudioContextProvider from "./context/audio.context";
import { TourProvider } from "@reactour/tour";

const steps = [
  {
    selector: ".first-step",
    content:
      "Bienvenido, primero configura el nombre del equipo y los nombres de los jugadores del equipo visitante",
  },
  {
    selector: ".second-step",
    content:
      "Una vez termines de configurar el equipo visitante lo siguiente es hacer los mismo para el equipo local",
  },
  {
    selector: ".third-step",
    content:
      "Al terminar de configurar ambos equipos dale click al boton jugar para comenzar el juego",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TourProvider steps={steps}>
      <AudioContextProvider>
        <App />
      </AudioContextProvider>
    </TourProvider>
  </Provider>
);
