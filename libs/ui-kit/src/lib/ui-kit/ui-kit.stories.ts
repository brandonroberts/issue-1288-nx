import type { Meta, StoryObj } from '@storybook/angular/';

import { UiKitComponent } from './ui-kit.component';

const meta: Meta<UiKitComponent> = {
  component: UiKitComponent,
};

export default meta;
type Story = StoryObj<UiKitComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};