import { Story, Meta } from '@storybook/react';
import { List, ListProps } from './list';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '../avatar/avatar';
import ListItemAvatar from './list-item-avatar/list-item-avatar';
import IconButton from '../../inputs/button/icon-button/icon-button';
import SendIcon from '@mui/icons-material/Send';
import user1Image from '../../../assets/images/christina.jpg';
import user2Image from '../../../assets/images/craig.jpg';


export default {
  component: List,
  title: 'Material-UI/Data Display/List',
} as Meta;

const basicListItems =
  <>
    <ListItemButton>
      <ListItemText primary="Item one" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Item two" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Item three" />
    </ListItemButton>
  </>

const basicListWithSecondaryText =
  <>
    <ListItemButton>
      <ListItemText primary="Item one" secondary="Secondary text" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Item two" secondary="Secondary text" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Item three" secondary="Secondary text" />
    </ListItemButton>
  </>

const listItemsWithIcons =
<>
  <ListItemButton>
    <ListItemIcon>
      <FolderIcon />
    </ListItemIcon>
    <ListItemText primary="Item one" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <FolderIcon />
    </ListItemIcon>
    <ListItemText primary="Item two" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <FolderIcon />
    </ListItemIcon>
    <ListItemText primary="Item three" />
  </ListItemButton>
</>

const listAvatarsWithText =
<>
  <ListItemButton>
    <ListItemAvatar>
      <Avatar alt="Tabitha Hawkins" src={user1Image} />
    </ListItemAvatar>
    <ListItemText primary="Item one" />
  </ListItemButton>
  <ListItemButton>
    <ListItemAvatar>
      <Avatar alt="Terry Brookfield" src={user2Image} />
    </ListItemAvatar>
    <ListItemText primary="Item two" />
  </ListItemButton>
  <ListItemButton>
    <ListItemAvatar>
      <Avatar alt="Tabitha Hawkins" src={user1Image} />
    </ListItemAvatar>
    <ListItemText primary="Item three" />
  </ListItemButton>
</>

const listAvatarsWithIcons =
<>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <SendIcon />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar alt="Tabitha Hawkins" src={user1Image} />
    </ListItemAvatar>
    <ListItemText primary="Item one" />
  </ListItem>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <SendIcon />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar alt="Terry Brookfield" src={user2Image} />
    </ListItemAvatar>
    <ListItemText primary="Item two" />
  </ListItem>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <SendIcon />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar alt="Tabitha Hawkins" src={user1Image} />
    </ListItemAvatar>
    <ListItemText primary="Item three" />
  </ListItem>
</>


const BasicTemplate: Story<ListProps> = (args) => <List {...args} />;

export const AvatarAndText = BasicTemplate.bind({});
AvatarAndText.args = {
  children: listAvatarsWithText,
};

export const AvatarAndIcons = BasicTemplate.bind({});
AvatarAndIcons.args = {
  children: listAvatarsWithIcons,
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  children: basicListItems,
};

export const Dense = BasicTemplate.bind({});
Dense.args = {
  children: basicListItems,
  dense: true,
};

export const IconAndText = BasicTemplate.bind({});
IconAndText.args = {
  children: listItemsWithIcons,
};

// Will need to comeback to this
// export const Nested = BasicTemplate.bind({});
// Nested.args = {
//   children: basicListItems,
// };

export const WithSecondaryText = BasicTemplate.bind({});
WithSecondaryText.args = {
  children: basicListWithSecondaryText,
};
