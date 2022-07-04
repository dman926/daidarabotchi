import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

const PrintContext = createContext<{
  print: boolean;
  setPrint: Dispatch<SetStateAction<boolean>>;
}>({
  print: false,
  setPrint: () => {},
});

export const usePrint = () => useContext(PrintContext);

export function PrintProvider(
  { print: iPrint, children }: { print?: boolean; children: ReactNode } = {
    print: false,
    children: null,
  }
) {
  const [print, setPrint] = useState<boolean>(Boolean(iPrint));
  const memoizedValue = useMemo(() => ({ print, setPrint }), [print]);

  return (
    <PrintContext.Provider value={memoizedValue}>
      <div data-testid="print-provider" />
      {children}
    </PrintContext.Provider>
  );
}

export default PrintProvider;
