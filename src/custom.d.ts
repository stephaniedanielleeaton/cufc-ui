declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.stories.tsx' {
  import { Meta, StoryObj } from '@storybook/react';
  const meta: Meta;
  export default meta;
  export const Story: StoryObj;
}

declare module '*.stories.ts' {
  import { Meta, StoryObj } from '@storybook/react';
  const meta: Meta;
  export default meta;
  export const Story: StoryObj;
}
