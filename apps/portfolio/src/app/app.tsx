import { Route, Routes } from 'react-router-dom';
import FourZeroFour from './four-zero-four/four-zero-four';
import Resume from './resume/resume';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
}

export default App;
