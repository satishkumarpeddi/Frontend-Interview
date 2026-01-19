import "./App.css";
import Header from "./Components/Header";

import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="h-min-screen flex flex-col gap-y-4">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
