import React, { useEffect } from 'react';

const CreateModal = ({ CloseModal }) => {
  let myRef;
  useEffect(() => {
    document.addEventListener('click', closeModal);
    return () => {
      document.removeEventListener('click', closeModal);
    };
  }, []);

  const closeModal = (e) => {
    if (myRef && !myRef.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div>
      <form>
        <h4 ref={(node) => (myRef = node)}>Cadastrar Politicas de Produto</h4>
        <div className="form-group">
          <input type="text" name="otimo" className="form-control" />
          <input type="text" name="bom" className="form-control" />
          <input type="text" name="critico" className="form-control" />
        </div>
        <button className="btn btn-primary float-right">Cadastrar</button>
        <button
          className="btn btn-danger float-right mr-1"
          onClick={closeModal}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateModal;
