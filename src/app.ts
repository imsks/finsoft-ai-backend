import express, { Express, Request, Response } from 'express';
import { dummyData, stockLabels, timeDuration } from 'data';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    data: { stocks: dummyData, duration: timeDuration, stockLabels },
  });
});

export default app;
