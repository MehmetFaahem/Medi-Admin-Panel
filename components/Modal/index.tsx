import React from "react";

function Modal({ show, children, onClose }: any) {
  if (!show) {
    return null;
  }
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        zIndex: 10000000,
        top: 0,
        position: "fixed",
        left: 0,
      }}
      onClick={onClose}
      className="bg-slate-900/90 justify-center flex fixed place-content-center items-center"
    >
      <div
        className="flex"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          zIndex: 20000,
          position: "relative",
        }}
      >
        <div className="p-24 overflow-y-scroll max-h-96 text-black bg-slate-700 rounded-2xl items-center flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
