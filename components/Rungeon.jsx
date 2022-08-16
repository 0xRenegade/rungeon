import { useState, useEffect } from "react";

export { Rungeon };

function Rungeon({ ...props }) {
    return (
        <div
            id="stage_container"
            className="stage d-flex flex-column flex-nowrap vh-100"
        >
            <div
                id="stage-icon-container"
                className="icon fa-3x align-self-center"
            >
                <i id="stage-icon"></i>
            </div>
            <h1 id="stage-title"></h1>
            <p id="stage-body"></p>
            <div
                id="stage-button-container"
                className="d-flex justify-content-center"
            >
                <button id="stage-btn-restart" className="btn btn-primary">
                    restart
                </button>
                <button id="stage-btn-back" className="btn btn-danger">
                    back
                </button>
                <button id="stage-btn-next" className="btn btn-primary">
                    continue
                </button>
            </div>
        </div>
    );
}
