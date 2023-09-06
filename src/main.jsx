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
    content: (
      <img
        src="./steps/first-step.jpeg"
        alt="Bienvenido, primero configura el nombre del equipo y los nombres de los jugadores del equipo visitante"
      />
    ),
  },
  {
    selector: ".second-step",
    content: (
      <img
        src="./steps/second-step.jpeg"
        alt="Una vez termines de configurar el equipo visitante lo siguiente es hacer los mismo para el equipo local"
      />
    ),
  },
  {
    selector: ".third-step",
    content: (
      <img
        src="./steps/third-step.jpeg"
        alt="Al terminar de configurar ambos equipos dale click al boton jugar para comenzar el juego"
      />
    ),
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TourProvider
      steps={steps}
      showBadge={false}
      showNavigation={false}
      showCloseButton={false}
      styles={{
        popover: (base) => ({
          ...base,
          borderRadius: 10,
          padding: 10,
          backgroundColor: "#1f2d2d",
        }),
      }}
    >
      <AudioContextProvider>
        <App />
      </AudioContextProvider>
    </TourProvider>
  </Provider>
);
