import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        <button className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </button>
    )
};

export default NotificationButton;
