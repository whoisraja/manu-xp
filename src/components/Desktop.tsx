import { useState } from "react";
import Window from "./Window";
import "./Desktop.css";

const icons = [
  { id: "first", title: "First Sight 🧸" },
  { id: "diwali", title: "Diwali Party 🎆" },
  { id: "cafe", title: "Cine Tree Café ☕" },
  { id: "funny", title: "Funny Moments 😂" },
  { id: "juice", title: "Juice Habit 🥤" },
  { id: "gallery", title: "Gallery 🖼️" },
  { id: "letter", title: "Letter 💌" },
];

export default function Desktop() {
  const [openWindow, setOpenWindow] = useState<string | null>(null);

  return (
    <div
  className="desktop"
  style={{
    backgroundImage: "url('/wallpaper/bliss.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <h1 className="desktop-title">Manu & Raja Memories 💖</h1>

      <div className="icons">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="icon"
            onClick={() => setOpenWindow(icon.id)}
          >
            📁
            <p>{icon.title}</p>
          </div>
        ))}
      </div>

      {openWindow && (
        <Window id={openWindow} close={() => setOpenWindow(null)} />
      )}
    </div>
  );
}
