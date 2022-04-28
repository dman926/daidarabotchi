import { ButtonProps } from '@daidarabotchi/material-ui';
import { Header } from '@daidarabotchi/new-england-keeshonds-lib';
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  CssBaseline,
} from '@mui/material';
import { indigo, blueGrey } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home, Puppies, Puppy } from './pages';

// TODO: Add dark theme switcher in the future
const theme: ThemeOptions = {
  palette: {
    primary: indigo,
    secondary: blueGrey,
  },
};

const menuItemButtonBaseProps: ButtonProps = {
  variant: 'contained',
  color: 'info',
};

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <section className="app" data-testid="app-wrapper">
        <Header
          navigate={(url, options) => {
            navigate(url, options);
          }}
          title={{ icon: <PetsIcon />, text: 'New England Keeshonds' }}
          currentRoute={location.pathname}
          home="/"
          menu={[
            {
              text: 'Home',
              link: '/',
              ButtonProps: menuItemButtonBaseProps,
            },
            {
              text: 'Puppies',
              link: '/puppies',
              ButtonProps: menuItemButtonBaseProps,
            },
          ]}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puppies" element={<Puppies />} />
            <Route
              path="/puppies/:parentName/:litterNum/:color"
              element={<Puppy />}
            />
          </Routes>
        </main>
      </section>
    </ThemeProvider>
  );
}

export default App;
