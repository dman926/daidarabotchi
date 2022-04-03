import { Typography } from '../../data-display/typography/typography';
import { Box } from '../../layout/box/box';
import { Story, Meta } from '@storybook/react';
import Button from '../../inputs/button/button';
import { Card, CardProps } from './card';
import CardActions from './card-actions/card-actions';
import CardContent from './card-content/card-content';

export default {
  component: Card,
  title: 'Material-UI/Surfaces/Card',
} as Meta;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="GrayText.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  classes: undefined,
  raised: undefined,
  sx: undefined,
};
