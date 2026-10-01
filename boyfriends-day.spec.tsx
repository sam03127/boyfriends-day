import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { PromisesHub } from './bf-pages.js';

describe('PromisesHub', () => {
  it('keeps "next" locked until all three promises are opened', () => {
    const { rerender } = render(<PromisesHub opened={[0]} onOpen={() => {}} onNext={() => {}} />);
    expect((screen.getByText('open all promises (1/3)').closest('button') as HTMLButtonElement).disabled).toBe(true);

    const onNext = vi.fn();
    rerender(<PromisesHub opened={[0, 1, 2]} onOpen={() => {}} onNext={onNext} />);
    fireEvent.click(screen.getByText('next: our song 🎵'));
    expect(onNext).toHaveBeenCalled();
  });
});
