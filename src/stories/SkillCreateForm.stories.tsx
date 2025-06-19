import React from 'react';
import { SkillCreateForm } from '../shared/ui/skill-create-form';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Forms/SkillCreateForm',
  component: SkillCreateForm,
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <SkillCreateForm />; 