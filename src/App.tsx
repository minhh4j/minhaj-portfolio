import { Home } from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from "react-hot-toast";
export function App() {
  return <ThemeProvider>
     <Toaster position="top-right" reverseOrder={false}   toastOptions={{
    success: {
      style: {
        background: "#facc15", 
        color: "black",
        fontWeight: "600",
      },
      iconTheme: {
        primary: "black",
        secondary: "#facc15",
      },
    },
  }} />
      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
    </ThemeProvider>;
}