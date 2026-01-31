import { useEffect, useState } from "react";

export default function LoadingScreen({ done }: { done: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          done();
        }
        return p + 10;
      });
    }, 300);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Tahoma",
      }}
    >
      <h1>Starting Manu Memories 💖</h1>
      <p>Loading... {progress}%</p>
    </div>
  );
}
