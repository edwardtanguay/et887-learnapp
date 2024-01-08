import express from 'express';
import { flashcardRouter } from './routers/flashcardRouter';

export const app = express();

app.get('/', (_req, res) => {
	res.json({
		appName: "API for AppLearn version 0.2"
	})
});

app.use('/api/flashcards', flashcardRouter);