import { AppHeaderUI } from "../../../shared/ui/app-header";
import { Input } from "../../../shared/ui/input";
import { Button } from "../../../shared/ui/button";
import { AuthButton } from "../../../shared/ui/auth-button/auth-button";
import styles from "./LoginUI.module.css";
import { WelcomeCard } from "../../../shared/ui/welcome-card/welcome-card";

export const LoginUI = () => {
    return(  
        <div className={styles.container}>
            <div className={styles.header}>
                <AppHeaderUI isAuth={false} isCompact />
            </div>
            <h2 className={styles.title}>Вход</h2>

            <div className={styles.formContainer}>
                <div className={styles.formBlock}>
                    <div className={styles.formWrapper}>
                        <div className={styles.authButtonWrapper}>
                            <AuthButton icon="google" />
                            <AuthButton icon="apple" />
                        </div>

                        <div className={styles.separatorWrapper}>
                            <div className={styles.separatorLine} />
                            <span className={styles.separatorText}>или</span>
                            <div className={styles.separatorLine} />
                        </div>

                        <div className={styles.inputWrapper}>
                            <Input 
                                label="Email"
                                placeholder="Введите email"
                                className={styles.overrideStyles}
                            />

                            <Input 
                                label="Пароль"
                                placeholder="Введите ваш пароль"
                                type="password"
                                className={styles.overrideStyles}
                            />
                        </div>
                    </div>
                    <Button
                        fill
                        paddingX={192}
                    >
                        Войти
                    </Button>
                    <Button
                        className={styles.registrationButton}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
                    <div className={styles.formBlock}>
                        <WelcomeCard step="0"/>
                    </div>
                </div>
        </div>
    )
}