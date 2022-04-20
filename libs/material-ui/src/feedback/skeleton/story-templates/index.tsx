import { Story } from '@storybook/react';
import { useState } from '@storybook/addons';
import { Skeleton, SkeletonProps } from '../skeleton';
import Checkbox from '../../../inputs/checkbox/checkbox';
import Avatar from '../../../data-display/avatar/avatar';
import user from '.././../../../assets/images/christina.jpg';
import List from '../../../data-display/list/list';
import ListItem from '../../../data-display/list/list-item/list-item';
import ListItemText from '../../../data-display/list/list-item-text/list-item-text';


export const PrimaryTemplate: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const DemoTemplate: Story<SkeletonProps> = (args) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleCheck = () => { setLoading(!loading); };

  const DemoAvatar = () => <Avatar sx={{ width: 100, height: 100 }} src={user} />
  const DemoText = () => (
    <div style={{ width: 300, height: 50, marginTop: 8, paddingTop: 4 }}>
      { 
      loading
        ? <Skeleton variant="text" animation="wave" width={300} height={50} sx={{mt: 1}}/>
        : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      }
    </div>
  )
  const DemoList = () => (
    <div style={{ width: 300, height: 300 }}>
      <List>
        <ListItem>
          { 
            loading
            ? <Skeleton variant="text" animation="wave" width={300} height={30} />
            : <ListItemText sx={{ height: 30, m: 0 }}>Item 1: Lorem ipsum dolor sit amet</ListItemText>
          }
        </ListItem>
        <ListItem>
          { 
            loading
            ? <Skeleton variant="text" animation="wave" width={300} height={30} />
            : <ListItemText sx={{ height: 30, m: 0 }}>Item 2: Lorem ipsum dolor sit amet</ListItemText>
          }
        </ListItem>
        <ListItem>
          { 
            loading
            ? <Skeleton variant="text" animation="wave" width={300} height={30} />
            : <ListItemText sx={{ height: 30, m: 0 }}>Item 3: Lorem ipsum dolor sit amet</ListItemText>
          }
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <div style={{textAlign: "center", marginBottom: 8 }}>
        <label>Toggle loading state:</label>
        <Checkbox checked={loading} onChange={handleCheck} />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', columnGap: 8}}>
        { 
          loading
            ? <Skeleton variant="circular" animation="wave"> <DemoAvatar /> </Skeleton>
            : <DemoAvatar />
        }
        <DemoText />
      </div>
      <DemoList />
    </div>
  );
};
