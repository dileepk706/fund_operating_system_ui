import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  isSubmitting?: boolean;
};

function Modal({ children, open, onClose, isSubmitting }: Props) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 99999,
        }}
        onClick={() => {
          !isSubmitting && onClose();
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          backgroundColor: "white",
          zIndex: 100000,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        {children}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
}

export default Modal;
