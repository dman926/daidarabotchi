import { useEffectOnce, useStore } from '@daidarabotchi/sephira-front-end-lib';

export function App() {
  const user = useStore((store) => store.user);

  useEffectOnce(() => {
    user.subscribe((val) => {
      console.log(val);
    });
  });

  return (
    <div data-testid="sephira-wrapper">
      <p>test</p>
    </div>
  );
}

export default App;
