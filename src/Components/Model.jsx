import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  };

  const handleClickAway = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={toggleModal} className="button">
        Toggle Modal
      </button>

      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/75"
            onClick={handleClickAway}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="w-screen max-w-xl mx-auto bg-teal-400 rounded-lg h-96"
              onClick={handleClickAway}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
