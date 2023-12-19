/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;
