import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Logon } from "./pages/Logon";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" element={<Logon />} />
        </BrowserRouter>
    )
}

export default Routes;