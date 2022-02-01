import { FC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomMenuItem from './CustomMenuItem';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={6}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    background: `linear-gradient(180deg, ${theme.palette.background.paper} 27%, ${theme.palette.background.default} 89%)`,
    width: '50%',
  },
  '& .MuiList-root': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
}));

const CustomModuleMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        MODULES
      </Button>
      <StyledMenu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <CustomMenuItem>CMS</CustomMenuItem>
        <CustomMenuItem>CMS</CustomMenuItem>
        <CustomMenuItem>MAILS</CustomMenuItem>
        <CustomMenuItem>STORAGE</CustomMenuItem>
      </StyledMenu>
    </>
  );
};

export default CustomModuleMenu;
