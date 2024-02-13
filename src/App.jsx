import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import Favorites from "./pages/Favorites";
import Homepage from "./pages/Homepage";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route index element={<Navigate replace to="pokemons" />} />
            <Route path="favorites" element={<Favorites />}></Route>
            <Route path="pokemons" element={<Homepage />}></Route>
            <Route path="pokemons/:page" element={<Homepage />}></Route>
            <Route
              path="pokemon"
              element={<Navigate replace to="/pokemons" />}
            ></Route>
            <Route path="pokemon/:name" element={<Pokemon />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
