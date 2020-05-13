import React from "react";

function Modal(props) {
    return (
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Request</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            // Restaurant details //
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}