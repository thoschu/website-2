import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MainComponent } from './main.component';

export default {
  title: 'MainComponent',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MainComponent>;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  component: MainComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}