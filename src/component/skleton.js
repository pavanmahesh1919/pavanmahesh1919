import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
      <div><ul><li>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={50} height={40} />
      <Skeleton variant="rectangular" width={230} height={600} />
    </Stack>
    </li>
    </ul></div>
  );
}


