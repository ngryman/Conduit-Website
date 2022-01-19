import { FC } from 'react';
import { Box, Divider } from '@mui/material';
import * as React from 'react';
import TrackChangesTwoToneIcon from '@mui/icons-material/TrackChangesTwoTone';
import OpenSource from '../../../public/icons/open-source-fill.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AboutCard from '../custom/AboutCard';

const styles = {
  cardLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    '& > *': {
      flex: '1 1 30%',
      minWidth: 320,
    },
  },
} as const;

const AboutUsSection: FC = () => {
  return (
    <Box mb={16}>
      <Divider sx={{ mt: [8, 16, 24], mb: 8 }}>ABOUT US</Divider>
      <Box sx={styles.cardLayout}>
        <AboutCard
          title={'Who powered conduit'}
          icon={<AccountCircleIcon color={'inherit'} sx={{ width: 60, height: 60 }} />}
          text={
            "Conduit is powered by Quintessential. Quintessential is a technology company that develops premium software solutions for internal use and third-party clients. Quintessential is deeply concerned about Design and Development in every product that is being managed or developed under it's guidance."
          }
        />
        <AboutCard
          title={'What we strive for'}
          icon={<TrackChangesTwoToneIcon color={'error'} sx={{ width: 60, height: 60 }} />}
          text={
            'We want to deliver the most seamless backend experience possible. Even though Conduit is in a working state in the coming months we will work on requested changes/improvements and of course everyone is welcome to contibute.'
          }
        />
        <AboutCard
          title={'Going openSource'}
          icon={<OpenSource />}
          text={
            'Our passion for open source, communities and knowledge sharing leads us into crafting services and solutions and hosting events which empower innovation and networking.'
          }
        />
      </Box>
    </Box>
  );
};

export default AboutUsSection;
