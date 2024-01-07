import express from 'express';
import * as config from './config';
import * as flashcardsHandler from './handlers/flashcards';

const app = express();

app.get('/', (req, res) => {
	const flashcards = flashcardsHandler.getFlashcards();
	res.json({
		appName: "API for AppLearn version 0.1",
		flashcards
	})
});

app.get('/add', (req, res) => {
	const _flashcard = {
		front: 'fff'
	}
	const flashcard = flashcardsHandler.createFlashcard(_flashcard);
	res.json({
		flashcard
	})
});

app.listen(config.getPort(), () => {
	console.log(`AppLearn API is running at http://localhost:${config.getPort()}`);
});