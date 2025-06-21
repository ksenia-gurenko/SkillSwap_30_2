import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './login.module.css';
import { AuthButton, Button, Input, SectionHeader, WelcomeCard } from "../../shared/ui";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main className={styles.containerMain}>
            <SectionHeader text="Вход" level="h3" />
            <div className={styles.sections}>
                <div className={styles.section}>
                    <div className={styles.loginForm}>
                        <AuthButton icon='google' />
                        <AuthButton icon='apple' />
                        <div className={styles.separator}>
                            <span className={styles.separatorLine}></span>
                            <span>или</span>
                            <span className={styles.separatorLine}></span>
                        </div>
                        <div className={styles.inputGroup}>
                            <Input
                                label="Email"
                                placeholder="Введите email"
                                type='email'
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <Input
                                label="Пароль"
                                placeholder="Введите ваш пароль"
                                type='password'
                            />
                        </div>

                        <Button fill width={436}>Войти</Button>

                        <p className={styles.registerText}>
                            <span onClick={() => navigate('/registration')}>Зарегистрироваться</span>
                        </p>

                    </div>
                </div>
                <div className={styles.section}>
                    <WelcomeCard step='0' />
                </div>
            </div>
        </main>
    );
}