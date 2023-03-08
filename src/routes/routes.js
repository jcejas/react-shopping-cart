import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { IndexPage } from "../pages/index.js"
import { ProductDetailsPage } from "../pages/product.js";
import { ErrorPage } from "../pages/error-page.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        [
            <Route path="/" element={<IndexPage />} errorElement={<ErrorPage/>}/>,
            <Route path="/product/:id" element={<ProductDetailsPage />}/>
        ]
    )
);
  
export const RouterProviderCustom = () => {
    return (
        <RouterProvider router={router} />
    )
}