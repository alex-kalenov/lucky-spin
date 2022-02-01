import Inputs from "./components/Inputs/Inputs";
import Result from "./components/Result/Result";
import "./styles.css";
import { useContext } from "react";
import CircleContext from "./store/circle-context";

export default function App() {
  const circleCtx = useContext(CircleContext);

  return (
    <div className="wrapper">
      {!circleCtx.positions.length ? <Inputs /> : <Result />}
    </div>
  );
}
