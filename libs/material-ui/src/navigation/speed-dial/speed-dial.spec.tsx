import { render } from '@testing-library/react';

import SpeedDial from './speed-dial';
import SpeedDialIcon from './speed-dial-icon/speed-dial-icon';
import SpeedDialAction from './speed-dial-action/speed-dial-action';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

describe('SpeedDial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    );
    expect(baseElement).toBeTruthy();
  });
});
