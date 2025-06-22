import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from './registration.module.css';
import { AuthButton, Button, CheckboxDropdown, DropDownDateBirthday, ImageDragAndDropUI, Input, SkillProposalModal, StepperUI, WelcomeCard } from "../../shared/ui";
import type { RegistrationData } from "./type";
import {
    CITIES,
    GENDER,
    SKILL_CATEGORIES,
    SKILL_SUBCATEGORIES,
} from '../../shared/ui/checkbox-dropdown/constants';
import iconAdd from './icon-add.svg';
import { useAppState } from "../../entities/app-state-context/useAppState";
import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPE } from "../../shared/lib/constants";
import type { TSkill, TUser } from "../../entities/types";
import { calculateAge } from "../../shared/lib/utils";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAppState();
    const [step, setStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<RegistrationData>({
        email: '',
        password: '',
        name: '',
        birthDate: new Date(0, 0, 0),
        gender: '',
        city: '',
        learnCategory: '',
        learnSubcategory: '',
        skillName: '',
        skillCategory: '',
        skillSubcategory: '',
        skillDescription: '',
        skillImages: null
    });

    const handleChange = (
        field: keyof RegistrationData,
        value: string | string[] | File[] | Date | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else {
            setIsModalOpen(true);
        }
    };

    const onSubmit = () => {
        const user: TUser = {
            _id: uuidv4().toString(),
            avatar: '',
            name: formData.name,
            city: formData.city,
            age: calculateAge(formData.birthDate),
            gender: formData.gender
        }
        dispatch({ type: ACTION_TYPE.SET_USER, payload: user });
        dispatch({ type: ACTION_TYPE.SET_AUTH, payload: true });

        const skill: TSkill = {
            _id: uuidv4().toString(),
            user: user,
            title: formData.skillName,
            description: formData.skillDescription,
            category: formData.skillCategory,
            canTeach: [formData.skillName],
            wantsToLearn: [formData.learnCategory]
        }
        dispatch({ type: ACTION_TYPE.ADD_SKILL_CARD, payload: skill });
        navigate('/');
    }

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
                <CheckboxDropdown
                    label='Категория навыка, которому хотите научиться'
                    placeholder='Выберите категорию'
                    options={SKILL_CATEGORIES}
                    selected={[formData.learnCategory]}
                    onChange={(val) => {
                        handleChange('learnCategory', val[0]);
                    }}
                    multiselect={false}
                />
                <CheckboxDropdown
                    label='Подкатегория навыка, которому хотите научиться'
                    placeholder='Выберите категорию'
                    options={SKILL_SUBCATEGORIES[formData.learnCategory]}
                    selected={[formData.learnSubcategory]}
                    onChange={(val) => {
                        handleChange('learnSubcategory', val[0]);
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
                    onChange={(val) => {
                        handleChange('skillDescription', val.target.value)
                    }}
                />
                <ImageDragAndDropUI
                    onChange={(val) => {
                        handleChange('skillImages', val)
                    }}
                />
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
            {isModalOpen === true ?
                <SkillProposalModal
                    title={formData.skillName}
                    subcategories={[formData.skillCategory, formData.skillSubcategory]}
                    description={formData.skillDescription}
                    images={[]}
                    onEdit={() => { prevStep(); setIsModalOpen(false); }}
                    onConfirm={() => { onSubmit() }}
                    onClose={() => { navigate('/') }}
                /> : null
            }
        </main>
    );
}