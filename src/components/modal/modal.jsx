import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../reducer/app/app.js';
import { getModalState, getErrorText } from '../../reducer/app/selectors.js';

const Modal = ({ text, isVisible, onClick }) => {
  const hiddenClass = isVisible ? '' : 'visually-hidden';

  return (
    <section className={`modal ${hiddenClass}`}>
      <div className="modal__content">
        <h2 className="modal__heading">Something went wrong!</h2>
        <p className="modal__text">{text}</p>

        <button className="modal__button catalog__button" onClick={onClick}>
          OK
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isVisible: getModalState(state),
  text: getErrorText(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.hideModal());
  },
});

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Modal };
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
