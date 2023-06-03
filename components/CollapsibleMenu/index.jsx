import React, { useState } from 'react';
import { IconButton, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { Menu, ExpandLess, ExpandMore } from '@mui/icons-material';

const CollapsibleToggleMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={handleToggle} edge="start" color="inherit" aria-label="menu">
        {open ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem >
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Menu Item 3" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

export default CollapsibleToggleMenu;
