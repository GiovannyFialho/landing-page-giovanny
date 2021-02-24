import { Meta, Story } from "@storybook/react/types-6-0";

import LinksSociais from ".";

export default {
    title: "LinksSociais",
    component: LinksSociais
} as Meta;

export const Basic: Story = (args) => <LinksSociais {...args} />;
