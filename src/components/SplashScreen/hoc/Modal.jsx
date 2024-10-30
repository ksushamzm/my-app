import { useEffect, useState } from "react";
import Portal from "./Portal";
import "./Modal.css";

export default function Modal({
  onClose,
  children,
  shown = false,
  className,
  contentClassName,
}) {
  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return shown ? (
    <Portal>
      <div className="rootModal">
        <div onClick={handleClose} className="backdrop"></div>
        <div className="contentModal">{children}</div>
      </div>
    </Portal>
  ) : null;
}
