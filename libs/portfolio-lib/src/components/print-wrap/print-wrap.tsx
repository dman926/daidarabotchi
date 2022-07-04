import { ElementType, ReactNode } from 'react';
import { Props } from '../../utils';

// eslint-disable-next-line @typescript-eslint/ban-types
export interface PrintWrapProps<T extends Function> {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: ElementType;
  props?: Props<T>;
  print?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function PrintWrap<T extends Function>({
  children,
  element: Element = 'div',
  props,
  print = false,
}: PrintWrapProps<T>) {
  return print ? (
    <div>{children}</div>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Element data-testid="portfolio-print-wrap" {...props}>
      {children}
    </Element>
  );
}
