import App from "./App";
import GlobalStyle from "./global.styled";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// Rendering main component as well as global styles...
root.render(
	<StrictMode>
		<App />
		<GlobalStyle />
	</StrictMode>
);
