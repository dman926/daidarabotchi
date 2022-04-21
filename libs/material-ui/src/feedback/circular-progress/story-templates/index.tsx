import CircularProgress, { CircularProgressProps } from '../circular-progress';
import { Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import { useEffect, useRef, useState } from '@storybook/addons';
import { Story } from '@storybook/react';
import Box from '../../../layout/box/box';
import Button from '../../../inputs/button/button';
import Typography from '../../../data-display/typography/typography';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export const BasicTemplate: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const InteractiveTemplate: Story<CircularProgressProps> = (args) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>(0);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export const MultipleColorTemplate: Story<CircularProgressProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
      <label>Secondary theming color (non-interactive):</label>
      <CircularProgress color="secondary" sx={{ m: '0 auto' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
      <label>Success theming color (non-interactive):</label>
      <CircularProgress color="success" sx={{ m: '0 auto' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
      <label>Editable color (interactive):</label>
      <CircularProgress {...args} sx={{ m: '0 auto' }} />
    </div>
  </div>
);

export const MultipleDeterminateTemplate: Story<CircularProgressProps> = (
  args
) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}
      >
        <label>25% loaded:</label>
        <CircularProgress
          variant="determinate"
          value={25}
          sx={{ m: '0 auto' }}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}
      >
        <label>50% loaded:</label>
        <CircularProgress
          variant="determinate"
          value={50}
          sx={{ m: '0 auto' }}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}
      >
        <label>75% loaded:</label>
        <CircularProgress
          variant="determinate"
          value={75}
          sx={{ m: '0 auto' }}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}
      >
        <label>100% loaded:</label>
        <CircularProgress
          variant="determinate"
          value={100}
          sx={{ m: '0 auto' }}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}
      >
        <label>In progress:</label>
        <CircularProgress
          variant="determinate"
          value={progress}
          sx={{ m: '0 auto' }}
        />
      </div>
    </div>
  );
};

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export const WithLabelTemplate: Story<CircularProgressProps> = (args) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};
