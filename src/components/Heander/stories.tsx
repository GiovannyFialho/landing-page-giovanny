import { Meta, Story } from "@storybook/react/types-6-0";

import Heander from ".";

export default {
    title: "Heander",
    component: Heander
} as Meta;

export const Basic: Story = (args) => <Heander {...args} />;
