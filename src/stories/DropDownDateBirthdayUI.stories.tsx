import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DropDownDateBirthday } from '../shared/ui/dropdown-date-birthday';

const meta: Meta<typeof DropDownDateBirthday> = {
  title: 'UI/DropDownDateBirthday',
  component: DropDownDateBirthday,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'date' },
      description: 'Текущее значение даты.',
    },
    onChange: {
      action: 'onChange',
      description: 'Обработчик изменения даты.',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-заполнитель для поля ввода.',
    },
    className: {
      control: 'text',
      description: 'Дополнительный класс CSS для стилизации.',
    },
    disabled: {
      control: 'boolean',
      description: 'Определяет, является ли поле ввода отключенным.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropDownDateBirthday>;

export const Primary: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(args.value || null);

    const handleChange = (newDate: Date | null) => {
      setDate(newDate);
      args.onChange(newDate);
    };

    return <DropDownDateBirthday {...args} value={date} onChange={handleChange} />;
  },
  args: {
    value: new Date(1995, 9, 28), // Пример даты: 28 октября 1995
    placeholder: 'дд.мм.гггг',
    disabled: false,
  },
};

export const Empty: Story = {
  args: {
    value: null,
    placeholder: 'дд.мм.гггг',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: new Date(2000, 3, 27), // Пример даты: 27 апреля 2000
    placeholder: 'дд.мм.гггг',
    disabled: true,
  },
};