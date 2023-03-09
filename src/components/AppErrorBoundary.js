import { ErrorBoundary } from 'react-error-boundary';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AppErrorBoundary({ inputs, children }) {
  return (
    <div>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} inputs={inputs} />
        )}
      >
        {children}
      </ErrorBoundary>
    </div>
  );
}

// FallbackComponent

function ErrorFallback({ error, inputs }) {
  console.log(error);
  return (
    <Container>
      <Box pt={10}>
        <Typography>Something went wrong:</Typography>
        <pre>{error?.message || error}</pre>
        <Typography pb={2}>
          Please report this error with the following information. Refresh the
          page to resume interacting with the tool.
        </Typography>
        {Object.entries(inputs).map(([k, v]) => (
          <Box>
            {k}: {v}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
