import * as ReactDOMClient from "react-dom/client";
import Museums from "./components/museums/museums";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<Museums />);