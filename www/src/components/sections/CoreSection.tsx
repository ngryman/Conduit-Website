import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ImageSectionCard from '../custom/ImageSectionCard';
import ToolIcon from '../../../public/icons/services.svg';
import LockIcon from '../../../public/icons/lock.svg';
import ApiIcon from '../../../public/icons/connect.svg';
import { SxObject } from '../../models/SxObjects';
import MemoryIcon from '@mui/icons-material/Memory';
import Link from 'next/link';

const styles: SxObject = {
  childrenGrow: {
    '& > *': {
      flexGrow: 1,
      width: '350px',
      maxWidth: '650px',
    },
  },
};

const CoreSection: FC = () => {
  return (
    <Box mt={[12, 16]}>
      <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
        <MemoryIcon sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
        <strong>Conduit Core</strong>
      </Typography>

      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        sx={styles.childrenGrow}
        gap={4}>
        <Link href={'/docs/core/router'} passHref>
          <ImageSectionCard
            subText={
              'Conduit router provides a way to register routes for REST ' +
              'and GraphQL APIs, as well as Web Sockets.'
            }
            title={'Router'}
            image={<ApiIcon />}
          />
        </Link>
        <Link href={'/docs/core/security'} passHref>
          <ImageSectionCard
            flexDirection={'row-reverse'}
            subText={
              'Rate limiting and Client Id/Secret authentication by default to keep you safe'
            }
            title={'Security'}
            image={<LockIcon />}
          />
        </Link>
        <Link href={'/docs/core/config'} passHref>
          <ImageSectionCard
            subText={'Configuration management, liveliness checks and service discovery baked-in.'}
            title={'Config'}
            image={<ToolIcon />}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default CoreSection;
