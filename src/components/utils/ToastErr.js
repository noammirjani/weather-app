import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function ToastErr({ message }) {
  return (
    <ToastContainer
      position="bottom-end"
      className="p-3"
      style={{ zIndex: 1060 }}
    >
      <Toast className="error-toast" bg="danger">
        <Toast.Header closeButton>
          <strong className="me-auto">weatherApp</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastErr;
