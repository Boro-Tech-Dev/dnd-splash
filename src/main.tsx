import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { lockDocumentTitle } from "./site-meta.ts";
import "./styles/index.css";

lockDocumentTitle();

createRoot(document.getElementById("root")!).render(<App />);
