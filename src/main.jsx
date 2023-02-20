import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain= 'dev-l26lh2dri5zp61zf.us.auth0.com'
      clientId= 'Yx9iMzcgEmUeT6EphAoA0im6ZRjhfHT7'
      authorizationParams={{redirect_uri: window.location.origin}}
      >
        <App></App>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
