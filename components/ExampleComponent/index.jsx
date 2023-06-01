import React from 'react';
import { Grid, Typography } from '@mui/material';

function ExampleComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="body1">First Line</Typography>
        <Typography variant="body1">Second Line</Typography>
        <Typography variant="body1">Third Line</Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="body1">Paragraph 1</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Paragraph 2</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Paragraph 3</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Paragraph 4</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExampleComponent;