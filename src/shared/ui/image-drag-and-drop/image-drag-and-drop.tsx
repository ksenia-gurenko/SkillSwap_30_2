import { useEffect, useRef, useState, type FC } from "react";
import styles from './image-drag-and-drop.module.css';
import galleryAddIcon from './gallery-add.svg';
import crossIcon from '../button/cross.svg';

export const ImageDragAndDropUI: FC = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const [images, setImages] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (images.length > 10) newErrors.image = 'Не более 10 файлов';
        images.forEach((file) => {
            if (!['image/jpeg', 'image/png'].includes(file.type))
                newErrors.image = `Файл ${file.name}: только jpeg или png`;
            if (file.size > 2 * 1024 * 1024)
                newErrors.image = `Файл ${file.name}: не больше 2MB`;
        });
        return newErrors;
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files).filter((f) =>
            ['image/jpeg', 'image/png'].includes(f.type)
        );
        if (files.length) {
            setImages((prev) => {
                const merged = [...prev, ...files].slice(0, 10);
                return merged;
            });
            setTouched((t) => ({ ...t, image: true }));
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
            ? Array.from(e.target.files).filter((f) =>
                ['image/jpeg', 'image/png'].includes(f.type)
            )
            : [];
        if (files.length) {
            setImages((prev) => {
                const merged = [...prev, ...files].slice(0, 10);
                return merged;
            });
            setTouched((t) => ({ ...t, image: true }));
        }
        // сбрасываем value, чтобы можно было выбрать тот же файл повторно
        if (e.target.value) e.target.value = '';
    };

    useEffect(() => {
        setErrors(validate());
    }, [images]);

    return (
        <>
            <div
                className={
                    styles.imageDrop +
                    (errors.image && touched.image
                        ? ' ' + styles.inputError
                        : '')
                }
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <div className={styles.imageDropText}>
                    Перетащите или выберите изображения навыка
                </div>
                {images.length < 10 && (
                    <>
                        <button
                            type='button'
                            className={styles.imageButton}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <img
                                src={galleryAddIcon}
                                alt='Галерея'
                                style={{ marginRight: 4, verticalAlign: 'middle' }}
                            />
                            <span>Выбрать изображения</span>
                        </button>
                        <input
                            type='file'
                            accept='image/jpeg,image/png'
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            multiple
                        />
                    </>
                )}
                {images.length > 0 && (
                    <div className={styles.imageName}>
                        <span>Загружено файлов: {images.length}</span>
                        <button
                            type='button'
                            aria-label='Удалить все изображения'
                            className={styles.imageRemoveBtn}
                            onClick={() => setImages([])}
                        >
                            <img
                                src={crossIcon}
                                alt='Удалить все'
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                )}
            </div>
            {errors.image && touched.image && (
                <div className={styles.errorText}>{errors.image}</div>
            )}
        </>

    )
}