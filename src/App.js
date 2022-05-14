import React from "react";
import Container from "./components/Container";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BankDetails from "./components/BankDetails";
import NotFound from "./components/NotFound";
import Favorites from "./components/Favorites"

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="my-8">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route exact path="/all-banks" element={<Container />} />
            <Route
              exact
              path="/"
              element={<Navigate replace to="/all-banks" />}
            />
            <Route
              exact
              path="/bank_details/:ifsc_code"
              element={<BankDetails />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
