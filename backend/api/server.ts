import express from 'express';

export const app = express();

app.get('/', (_req, res) => {
	res.json({
		appName: "API for AppLearn version 0.2"
	})
});