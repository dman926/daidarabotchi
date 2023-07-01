import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnimatedDownScrollCircle } from './animated-down-scroll-circle';

describe('AnimatedDownScrollCircle', () => {
  it('renders the component with correct number of chevrons', () => {
    render(<AnimatedDownScrollCircle />);

    const chevron1 = screen.getByTestId('chevron-1');
    const chevron2 = screen.getByTestId('chevron-2');
    const chevron3 = screen.getByTestId('chevron-3');
    const chevron4 = screen.queryByTestId('chevron-4');

    expect(chevron1).toBeInTheDocument();
    expect(chevron2).toBeInTheDocument();
    expect(chevron3).toBeInTheDocument();
    expect(chevron4).not.toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<AnimatedDownScrollCircle onClick={onClick} />);

    const wrapper = screen.getByTestId(
      'nek-animated-down-scroll-circle-wrapper'
    );

    await user.click(wrapper);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
