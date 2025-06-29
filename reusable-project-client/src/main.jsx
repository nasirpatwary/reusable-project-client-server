import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import "swiper/css";
import "@smastrom/react-rating/style.css";
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./providers/AuthProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
           <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
    <Toaster />
    <ToastContainer />
  </StrictMode>
);
