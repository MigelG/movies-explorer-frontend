import './Popup.css';

export default function Popup({ isOpen, onClose, message, status }) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">
                    {status ? 'Success' : 'Error'}
                </h2>
                <p className="popup__message">{message}</p>
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={onClose}
                />
            </div>
        </div>
    )
}
