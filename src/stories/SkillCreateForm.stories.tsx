import { SkillCreateForm } from '../shared/ui/skill-create-form';
import { BrowserRouter } from 'react-router-dom';
import { SkillProposalModal } from '../shared/ui/skill-proposal-modal/skill-proposal-modal';

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

export const ProposalModal = () => (
  <SkillProposalModal
    title="Игра на барабанах"
    subcategories={["Творчество и искусство", "Музыка и звук"]}
    description={
      'Привет! Я играю на барабанах уже больше 10 лет —от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без партитуры.'
    }
    images={[
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
    ]}
    onEdit={() => alert('Редактировать')}
    onConfirm={() => alert('Готово')}
    onClose={() => alert('Закрыть')}
  />
); 