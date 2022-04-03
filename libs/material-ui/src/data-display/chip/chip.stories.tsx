import { Story, Meta } from '@storybook/react';
import { Chip, ChipProps } from './chip';
import Avatar from '../avatar/avatar';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import Paper from '../../surfaces/paper/paper';
import userImage from '../../../assets/images/craig.jpg';

export default {
  component: Chip,
  title: 'Material-UI/Data Display/Chip',
} as Meta;

const BasicTemplate: Story<ChipProps> = (args) => <Chip {...args} />;

export const AvatarChip = BasicTemplate.bind({});
AvatarChip.args = {
  label: 'Avatar Chip',
  avatar: <Avatar alt="Barnard Greenview" src={userImage} />
};

// allows to exclude a list of controls (props) in storybook,
// removes the controls that are unnecessary, and have unintended side effects, for the chip with an avatar icon
AvatarChip.parameters = { controls: { exclude: ['children', 'deleteIcon', 'onDelete']}}


export const Basic = BasicTemplate.bind({});
Basic.args = {
  label: 'Basic Chip',
};

// allows to exclude a list of controls (props) in storybook,
// removes the controls that are unnecessary, and have unintended side effects, for the basic chip
Basic.parameters = { controls: { exclude: ['avatar', 'children', 'clickable', 'deleteIcon', 'onDelete']}}

export const Clickable = BasicTemplate.bind({});
Clickable.args = {
  label: 'Clickable Chip',
  clickable: true,
};

// allows to exclude a list of controls (props) in storybook,
// removes the controls that are unnecessary, and have unintended side effects, for the clickable chip
Clickable.parameters = { controls: { exclude: ['avatar', 'children', 'deleteIcon', 'onDelete']}}

export const Deletable = BasicTemplate.bind({});
Deletable.args = {
  label: 'Deletable Chip',
};

// allows to exclude a list of controls (props) in storybook,
// removes the controls that are unnecessary, and have unintended side effects, for the deletable chip
Deletable.parameters = { controls: { exclude: ['avatar', 'children']}}


export const Icon = BasicTemplate.bind({});
Icon.args = {
  label: 'Icon Chip',
  icon: <SendIcon />
};

// allows to exclude a list of controls (props) in storybook,
// removes the controls that are unnecessary, and have unintended side effects, for the chip with an icon
Icon.parameters = { controls: { exclude: ['avatar', 'children', 'deleteIcon', 'onDelete']}}


// new template for the chip array and relevant data
// example is a modified version of MUI's chip array: https://mui.com/components/chips/#chip-array
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const languageList = [
  { key: 0, label: 'Resistivity' },
  { key: 1, label: 'Conductivity' },
  { key: 2, label: 'Temperature coefficient of resistance' },
  { key: 3, label: 'Current Flow' },
]

const ChipArrayTemplate: Story<ChipProps> = (args) => 
  <Paper
    sx={{
      display: 'flex',
      flexDirection: 'rows',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      p: 0.5,
      m: 0,
    }}
    component="ul"
  >
    {languageList.map((data: any) => {
      return (
        <ListItem key={data.key}>
          <Chip
            label={data.label}
          />
        </ListItem>
      );
    })}
  </Paper>

export const ChipArray = ChipArrayTemplate.bind({});
ChipArray.args = {
  label: 'Chip Array',
};