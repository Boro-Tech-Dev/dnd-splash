import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const SITE_TITLE = "DeployDeliver";
document.title = SITE_TITLE;

createRoot(document.getElementById("root")!).render(<App />);
