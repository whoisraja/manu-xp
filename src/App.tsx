import { useState } from "react";
import Desktop from "./components/Desktop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loaded, setLoaded] = useState(false);

  return loaded ? (
    <Desktop />
  ) : (
    <LoadingScreen done={() => setLoaded(true)} />
  );
}

export default App;
