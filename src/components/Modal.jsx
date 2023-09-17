import React from "react";
import { Modal } from "antd";

function LoginModal({ isModalOpen, handleCancel, handleOk, message }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      okButtonProps={{ style: { backgroundColor: "blue" } }}
      title="Login Status"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{message}</p>
    </Modal>
  );
}

export default LoginModal;
