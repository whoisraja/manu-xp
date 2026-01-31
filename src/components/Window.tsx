import WindowContent from "./WindowContent";

export default function Window({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) {
  return (
    <div className="window">
      <div className="titlebar">
        <span>{id.toUpperCase()}</span>
        <button onClick={close}>X</button>
      </div>

      <div className="content">
        <WindowContent id={id} />
      </div>
    </div>
  );
}
