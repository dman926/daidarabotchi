import { useCallback, useState, ImgHTMLAttributes } from 'react';
import { CircularProgress, Grow } from '@mui/material';

export function Image({
  style,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <CircularProgress variant="indeterminate" />}
      <Grow in={loaded} data-testid="nek-image">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          {...props}
          style={{ display: loaded ? 'inherit' : 'none', ...style }}
          onLoad={handleLoad}
        />
      </Grow>
    </>
  );
}

export default Image;
