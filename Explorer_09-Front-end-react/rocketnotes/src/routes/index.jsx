import { AppRoutes } from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./app.auth";

export function Routes(){
  return(
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )

}