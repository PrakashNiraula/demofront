import React from "react";

function Modal({ title, children }) {
  return (
    <div
      id="modalForm"
      className="w-full fixed ml-20 inset-0 bg-opacity-75 bg-gray-300 z-10 flex items-center justify-center "
    >
      <section className="card w-1/3 ">
        <header className="card-header">
          <h2 className="card-title">{title}</h2>
        </header>
        <div className="card-body">{children}</div>
      </section>
    </div>
  );
}

export default Modal;