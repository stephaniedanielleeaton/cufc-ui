import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BaseText from './BaseText';

describe('BaseText', () => {
  it('renders with default props', () => {
    const { container } = render(<BaseText content="Default text" />);
    expect(container.firstChild).toBeInstanceOf(HTMLElement);
    expect(container.firstChild.className).toMatch('storybook-text text-gunmetal text-md');
    expect(container.textContent).toContain('Default text');
  });

  it('renders with custom props', () => {
    const { container } = render(<BaseText content="Custom text" color="lavender" size="lg" />);
    expect(container.firstChild.className).toMatch('storybook-text text-lavender text-lg');
    expect(container.textContent).toContain('Custom text');
  });
});
