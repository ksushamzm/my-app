import {
  createHashRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import "./styles.css";
import { HelmetProvider } from "react-helmet-async";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "error",
    element: <Error />,
  },
]);

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}
