import styles from "./welcome-card.module.css";

interface welcomeCardProps {
    step: keyof typeof IMAGES
}

const IMAGES: Record<string, { src: string, title: string, description: string }> = {
    "0": {
        src: "/assets/firstStep.svg",
        title: "С возвращением в SkillSwap!",
        description: "Обменивайтесь знаниями и навыками с другими людьми"
    },
    "1": {
        src: "/assets/firstStep.svg",
        title: "Добро пожаловать в SkillSwap!",
        description: "Присоединяйтесь к SkillSwap и обменивайтесь\n знаниями и навыками с другими людьми"
    },
    "2": {
        src: "/assets/secondStep.svg",
        title: "Расскажите немного о себе",
        description: "Это поможет другим людям лучше вас узнать,\n чтобы выбрать для обмена"
    },
    "3": {
        src: "/assets/thirdStep.svg",
        title: "Укажите, чем вы готовы поделиться",
        description: "Так другие люди смогут увидеть ваши предложения\n и предложить вам обмен!"
    }
}

export const WelcomeCard = ({ step }: welcomeCardProps) => {
    const content = IMAGES[step];

    return (
        <div className={styles.card}>
            <img src={content.src} alt={content.title} className={styles.image} />
            <div className={styles.text}>
                <h2 className={styles.title}>{content.title}</h2>
                <p className={styles.description}>{content.description}</p>
            </div>
        </div>
    )
}