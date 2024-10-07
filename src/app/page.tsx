import App from "./components/App";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <App />
      <Footer />
    </div>
  );
}
