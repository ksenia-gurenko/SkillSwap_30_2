import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxDropdown } from '../shared/ui/checkbox-dropdown';
import { SKILL_CATEGORIES, SKILL_SUBCATEGORIES } from '../shared/ui/checkbox-dropdown/constants';

const meta: Meta<typeof CheckboxDropdown> = {
  title: 'UI/CheckboxDropdown',
  component: CheckboxDropdown,
};
export default meta;

type Story = StoryObj<typeof CheckboxDropdown>;

export const CategoryAndSubcategoryLong: Story = {
  render: () => {
    const [category, setCategory] = useState<string[]>([]);
    const [subcat, setSubcat] = useState<string[]>([]);
    const subOptions = category.length > 0
      ? category.flatMap((cat) => SKILL_SUBCATEGORIES[cat] || [])
      : [];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 480 }}>
        <CheckboxDropdown
          options={SKILL_CATEGORIES}
          selected={category}
          onChange={(val) => {
            setCategory(val);
            setSubcat([]);
          }}
          label="Категория навыка, которому хотите научиться"
          placeholder="Выберите категорию"
        />
        <CheckboxDropdown
          options={subOptions}
          selected={subcat}
          onChange={setSubcat}
          disabled={category.length === 0}
          label="Подкатегория навыка, которому хотите научиться"
          placeholder="Выберите подкатегорию"
        />
      </div>
    );
  },
};

export const CategoryAndSubcategoryShort: Story = {
  render: () => {
    const [category, setCategory] = useState<string[]>([]);
    const [subcat, setSubcat] = useState<string[]>([]);
    const subOptions = category.length > 0
      ? category.flatMap((cat) => SKILL_SUBCATEGORIES[cat] || [])
      : [];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 480 }}>
        <CheckboxDropdown
          options={SKILL_CATEGORIES}
          selected={category}
          onChange={(val) => {
            setCategory(val);
            setSubcat([]);
          }}
          label="Категория навыка"
          placeholder="Выберите категорию навыка"
        />
        <CheckboxDropdown
          options={subOptions}
          selected={subcat}
          onChange={setSubcat}
          disabled={category.length === 0}
          label="Подкатегория навыка"
          placeholder="Выберите подкатегорию навыка"
        />
      </div>
    );
  },
}; 