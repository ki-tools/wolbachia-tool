import { useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Summary({ item, val }) {
  const prevVal = usePrevious(val);

  return (
    <Grid item sx={{ padding: '1px' }} lg={item.n} width="100%">
      <Box
        paddingLeft={2}
        paddingRight={2}
        paddingTop={1}
        paddingBottom={1}
        sx={{
          backgroundColor: item.color,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
        width="100%"
      >
        <div style={{ marginRight: 8 }}>{item.title}: </div>
        <CountUp
          start={prevVal || 0}
          end={val}
          delay={0}
          duration={0.5}
          separator=","
          decimals={0}
          // decimal="."
          prefix={item.dollars ? '$' : ''}
        >
          {({ countUpRef }) => (
            <Box>
              <span ref={countUpRef} />
            </Box>
          )}
        </CountUp>
      </Box>
    </Grid>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  return ref.current;
}
