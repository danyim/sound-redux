import React, { Component } from 'react';

class ModalLogin extends Component {
  render() {
    const onClickFunc = e => { e.stopPropagation(); };
    return (
      <div className="modal-content" onClick={onClickFunc}>
        <div className="modal-header">Sign In to your SoundCloud Account</div>
        <div className="modal-body"></div>
        <div className="modal-footer"></div>
      </div>
    );
  }
}

export default ModalLogin;
