import express from 'express';
import router from './routes';
import cors from 'cors';
import globalErrorHandler from './middlewares/error.middleware';

const app = express();

app.use(cors());

app.use('/api/v1', router);

// global error handler (should be last middleware)
app.use(globalErrorHandler);


export default app;