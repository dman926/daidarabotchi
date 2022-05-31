import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  Box,
  CircularProgress,
  IconButton,
  Typography,
} from '@daidarabotchi/material-ui';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export interface UploaderProps {
  onUpload: (
    files: FileList,
    setUploadPercent: Dispatch<SetStateAction<number>>,
    onUpload: () => void
  ) => void;
}

export function Uploader({ onUpload }: UploaderProps) {
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [uploadPercent, setUploadPercent] = useState(0);
  const [uploadState, setUploadState] = useState<
    { total: number; uploaded: number } | undefined
  >(undefined);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setUploadDisabled(true);
      setUploadPercent(0);
      setUploadState({ total: files.length, uploaded: 0 });

      onUpload(files, setUploadPercent, () => {
        setUploadState((curState) => {
          if (curState) {
            return {
              total: curState.total,
              uploaded: curState.uploaded + 1,
            };
          }
          return {
            total: files.length,
            uploaded: 1,
          };
        });
      });

      setUploadState(undefined);
      setUploadDisabled(false);
    }
  };

  return (
    <Box data-testid="uploader-wrapper">
      {uploadState && (
        <Typography>
          {uploadState.uploaded} / {uploadState.total} uploaded
        </Typography>
      )}
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        ref={fileInput}
        multiple
        disabled={uploadDisabled}
      />
      {uploadState && (
        <CircularProgress variant="determinate" value={uploadPercent} />
      )}
      <IconButton
        onClick={() => {
          fileInput.current?.click();
        }}
        disabled={uploadDisabled}
      >
        <CloudUploadIcon />
      </IconButton>
    </Box>
  );
}

export default Uploader;
