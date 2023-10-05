import './MessageBottom.css';

export const MessageBottom = () => {
    return (
        <div class="msg-bottom">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Write message..." />
                <div class="input-group-append ">
                    <span class="input-group-text send-icon "><i class="bi bi-send "></i>
                    </span>
                </div>
            </div>
        </div>
    )
}