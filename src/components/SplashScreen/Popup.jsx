export default function Popup({ onClose }) {
  return (
    <div>
      <button onClick={onClose}>x</button>
      <img src="./images/qr-code.png" alt="" />
    </div>
  );
}
