import styles from "./auth-button.module.css";

interface AuthButtonProps {
    icon: keyof typeof ICONS;
    onClick?: () => void;
}

const ICONS: Record<string, { src: string, alt: string, label: string}> = {
    google: {
        src: "/assets/google.svg",
        alt: "Продолжить с Google",
        label: "Продолжить с Google"
    },
    apple: {
        src: "/assets/apple.svg",
        alt: "Продолжить с Apple",
        label: "Продолжить с Apple"
    }
}

export const AuthButton = ({ icon, onClick}: AuthButtonProps) => {
    const iconData = ICONS[icon];

    return(
        <button className={styles.authButton} onClick={onClick}>
            <img src={iconData.src} alt={iconData.alt} className={styles.icon} />
            <span className={styles.label}>{iconData.label}</span>
        </button>
    )
}