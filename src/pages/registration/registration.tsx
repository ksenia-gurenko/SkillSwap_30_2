import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from './registration.module.css';
import { AuthButton, Button, CheckboxDropdown, DropDownDateBirthday, ImageDragAndDropUI, Input, StepperUI, WelcomeCard } from "../../shared/ui";
import type { RegistrationData } from "./type";
import {
    CITIES,
    GENDER,
    SKILL_CATEGORIES,
    SKILL_SUBCATEGORIES,
} from '../../shared/ui/checkbox-dropdown/constants';
import iconAdd from './icon-add.svg';

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<RegistrationData>({
        email: '',
        password: '',
        name: '',
        birthDate: new Date(0, 0, 0),
        gender: '',
        city: '',
        learnCategory: '',
        learnSubcategory: '',
        about: '',
        skillName: '',
        skillCategory: '',
        skillSubcategory: '',
        skillDescription: '',
    });

    const handleChange = (field: keyof RegistrationData, value: string | string[] | Date | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else {
            // submit data
            console.log('Registration data:', formData);
            navigate('/');
        }
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const renderStep1 = (): ReactNode => (
        <>
            <div className={styles.registrationProviders}>
                <AuthButton icon='google' />
                <AuthButton icon='apple' />
            </div>
            <div className={styles.separator}>
                <span className={styles.separatorLine}></span>
                <span>или</span>
                <span className={styles.separatorLine}></span>
            </div>
            <div className={styles.inputs}>
                <Input
                    label="Email"
                    placeholder="Введите email"
                    type='email'
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <Input
                    label="Пароль"
                    placeholder="Придумайте надёжный пароль"
                    type='password'
                    hint="Пароль должен содержать не менее 8 знаков"
                    onChange={(e) => handleChange('password', e.target.value)}
                />
            </div>

            <Button fill width={436} type='submit' onClick={nextStep}>Далее</Button>
            <p className={styles.registerText}>
                <span onClick={() => navigate('/login')}>Вход</span>
            </p>
        </>
    );

    const renderStep2 = (): ReactNode => (
        <>
            <div className={styles.iconAddContainer}>
                <img src={iconAdd} />
            </div>
            <div className={styles.inputs}>
                <Input
                    label="Имя"
                    placeholder="Введите ваше имя"
                    onChange={(val) => {
                        handleChange('name', val.target.value)
                    }}
                />
                <div className={styles.inputsMini}>
                    <DropDownDateBirthday
                        value={null}
                        placeholder='дд.мм.гггг'
                        disabled={false}
                        onChange={(val) => {
                            handleChange('birthDate', val)
                        }}
                    />
                    <CheckboxDropdown
                        label='Пол'
                        placeholder='Не указан'
                        options={GENDER}
                        selected={[formData.gender]}
                        onChange={(val) => {
                            handleChange('gender', val[0]);
                        }}
                        multiselect={false}
                    />
                </div>
                <CheckboxDropdown
                    label='Город'
                    placeholder='Не указан'
                    options={CITIES}
                    selected={[formData.city]}
                    onChange={(val) => {
                        handleChange('city', val[0]);
                    }}
                    multiselect={false}
                />

            </div>
            <div className={styles.buttons}>
                <Button width={208} onClick={prevStep}>Назад</Button>
                <Button width={208} fill onClick={nextStep}>Продолжить</Button>
            </div>
        </>
    );

    const renderStep3 = (): ReactNode => (
        <>
            <div className={styles.inputs}>
                <Input
                    label="Название навыка"
                    placeholder="Введите название вашего навыка"
                    onChange={(val) => {
                        handleChange('skillName', val.target.value)
                    }}
                />

                <CheckboxDropdown
                    label='Категория навыка'
                    placeholder='Выберите категорию навыка'
                    options={SKILL_CATEGORIES}
                    selected={[formData.skillCategory]}
                    onChange={(val) => {
                        handleChange('skillCategory', val[0]);
                    }}
                    multiselect={false}
                />
                <CheckboxDropdown
                    label='Подкатегория навыка'
                    placeholder='Выберите подкатегорию навыка'
                    options={SKILL_SUBCATEGORIES[formData.skillCategory]}
                    selected={[formData.skillSubcategory]}
                    onChange={(val) => {
                        handleChange('skillSubcategory', val[0]);
                    }}
                    multiselect={false}
                />
                <Input
                    label="Описание"
                    placeholder="Коротко опишите, чему можете научить"
                />

                <ImageDragAndDropUI />
            </div>
            <div className={styles.buttons}>
                <Button width={208} onClick={prevStep}>Назад</Button>
                <Button width={208} fill onClick={nextStep}>Продолжить</Button>
            </div>

        </>
    );

    const renderCurrentStep = (): ReactNode => {
        switch (step) {
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            default: return null;
        }
    };

    return (
        <main className={styles.containerMain}>
            <StepperUI
                currentStep={step}
                totalSteps={3}
            />

            <div className={styles.sections}>
                <div className={styles.section}>
                    <div className={styles.registrationForm}>
                        {renderCurrentStep()}
                    </div>
                </div>

                <div className={styles.section}>
                    <WelcomeCard step={step.toString()} />
                </div>
            </div>
        </main>
    );
}