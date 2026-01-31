import { useState } from "react";

export default function WindowContent({ id }: { id: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  switch (id) {
    case "first":
      return (
        <p>
          8th September… the first time I saw you Manu, from far in office.
          White dress, jeans, cute bow… unforgettable 🧸💖
        </p>
      );

    case "diwali":
      return (
        <p>
          Our first talk was in Diwali party 🎆 I was a little drunk 😂 and you
          smiled so much… wrong metro station mistake became a memory.
        </p>
      );

    case "cafe":
      return (
        <p>
          Cine Tree Café ☕🌳 became our comfort place. Talking deeper, knowing
          each other… my perfect moment.
        </p>
      );

    case "funny":
      return (
        <p>
          Walking 30 minutes just to do something… silly moments became the best
          memories 😂💞
        </p>
      );

    case "juice":
      return (
        <p>
          Daily vegetable juice habit 🥤 normal like wine but healthier 😌 and
          special because of you.
        </p>
      );

    case "letter":
      return (
        <p>
          Manu… this desktop has many folders, but the most important file is
          you in my heart 💌🧸
        </p>
      );

    case "gallery": {
      const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

      return (
        <div>
          <h2>Gallery 🖼️</h2>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {photos.map((pic) => (
              <img
                key={pic}
                src={`/photos/${pic}`}
                width="120"
                alt="memory"
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  border: "2px solid white",
                }}
                onClick={() => setSelected(`/photos/${pic}`)}
              />
            ))}
          </div>

          {/* Popup Viewer */}
          {selected && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setSelected(null)}
            >
              <img
                src={selected}
                alt="big-memory"
                style={{
                  width: "400px",
                  borderRadius: "15px",
                  border: "5px solid white",
                }}
              />
            </div>
          )}
        </div>
      );
    }

    default:
      return <p>Memory not found 💔</p>;
  }
}
