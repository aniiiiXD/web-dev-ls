import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));

    // Initialize Toast
    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    toastElList.map((toastEl) => new Toast(toastEl));

    // Initialize Popover
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((popoverTriggerEl) => new Popover(popoverTriggerEl));
  }, []);

  return (
    <div className="container text-center py-5">
      <h1>Hello bhai</h1>
      <div className="mt-3">
        <button className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
          Hover me for Tooltip
        </button>
      </div>
      <div className="mt-3">
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello, this is a toast message.
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-secondary" data-bs-toggle="popover" data-bs-content="This is the popover content">
          Click me for Popover
        </button>
      </div>
    </div>
  );
}

export default App;
