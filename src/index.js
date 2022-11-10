import "./index.css";
import App from "./App";
import "tachyons";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
