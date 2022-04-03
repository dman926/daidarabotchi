import { Story, Meta } from '@storybook/react';
import { SpeedDial, SpeedDialProps } from './speed-dial';
import {
  FileCopy as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { SpeedDialIcon } from './speed-dial-icon/speed-dial-icon';
import { SpeedDialAction } from './speed-dial-action/speed-dial-action';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default {
  component: SpeedDial,
  title: 'Material-UI/Navigation/SpeedDial',
} as Meta;

const Template: Story<SpeedDialProps> = (args) => (
  <SpeedDial
    {...args}
    ariaLabel="Speed Dial Example"
    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
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

export const Primary = Template.bind({});
Primary.args = {};
