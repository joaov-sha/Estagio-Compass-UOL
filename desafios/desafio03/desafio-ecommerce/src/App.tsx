import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./Router/AppRouter";
import { NavigationProvider } from "./contexts/NavigationContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavigationProvider>
          <AppRouter />
        </NavigationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
