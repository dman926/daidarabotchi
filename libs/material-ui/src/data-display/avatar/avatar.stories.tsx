import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';
import { Badge } from '../badge/badge';
import { styled } from '@mui/system';
import userImage from '../../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg';

// modified from the Material UI demo found here: https://codesandbox.io/s/komgtd?file=/demo.js
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
  },
}));

export default {
  component: Avatar,
  title: 'Material-UI/Data Display/Avatar',
} as Meta;

const NonBadgeTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Image = NonBadgeTemplate.bind({});
Image.args = {
  alt: 'Remy Sharp',
  src: userImage,
  sx: { bgcolor: 'primary.main' },
};

export const Letters = NonBadgeTemplate.bind({});
Letters.args = {
  alt: 'Remy Mitchell',
  src: '/broken-image-path.jpg',
  sx: { bgcolor: 'info.main' },
};


// this template styles the badge so it shows up on the avatar image
const BadgeTemplate: Story<AvatarProps> = (args) => 
  <StyledBadge
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
    overlap="circular"
    sx= {{ color: '#44b700'}}
    variant="dot"
  >
    <Avatar {...args} />
  </StyledBadge>;

export const ImageAndBadge = BadgeTemplate.bind({});
ImageAndBadge.args = {
  alt: 'Remy Sharp',
  src: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  sx: { bgcolor: 'primary.main' },
};