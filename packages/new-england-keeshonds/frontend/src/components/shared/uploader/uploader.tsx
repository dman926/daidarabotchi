import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export interface UploaderProps {
  onUpload: (
    files: FileList,
    setUploadPercent: Dispatch<SetStateAction<number>>,
    onUpload: () => void
  ) => Promise<void | void[]>;
  onFinishUpload?: () => void;
  disabled?: boolean;
}

export function Uploader({
  onUpload,
  onFinishUpload,
  disabled = false,
}: UploaderProps) {
  const [uploadPercent, setUploadPercent] = useState(0);
  const [uploadState, setUploadState] = useState<
    { total: number; uploaded: number } | undefined
  >();
  const [files, setFiles] = useState<FileList | undefined>();
  const fileInput = useRef<HTMLInputElement>(null);
  const uploadDisabled = useMemo(
    () => disabled || Boolean(files),
    [disabled, files]
  );

  const handleFileUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files: toUpload } = event.target;
      if (toUpload && toUpload.length > 0) {
        setUploadPercent(0);
        setUploadState({ total: toUpload.length, uploaded: 0 });
        setFiles(toUpload);
      }
      // Reset file input value
      if (fileInput.current) {
        // fileInput.current.value = '';
        // fileInput.current.files = null;
      }
    },
    []
  );

  useEffect(() => {
    if (typeof files === 'object') {
      onUpload(files, setUploadPercent, () => {
        setUploadState((curState) => {
          if (curState) {
            return {
              total: curState.total,
              uploaded: curState.uploaded + 1,
            };
          }
          return undefined;
        });
      }).then(() => {
        setUploadState(undefined);
        setFiles(undefined);
        if (onFinishUpload) {
          onFinishUpload();
        }
      });
    }
  }, [files, onUpload, onFinishUpload]);

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
