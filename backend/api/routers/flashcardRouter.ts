import { Router } from 'express';
import * as flashcardHandler from '../handlers/flashcardHandlers';
import { IFlashcard } from '../../interfaces';

export const flashcardRouter = Router();

flashcardRouter.get('/', (_req, res) => {
	res.json(flashcardHandler.getAllFlashcards());
});

flashcardRouter.get('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	const flashcard: IFlashcard | null = flashcardHandler.getOneFlashcard(suuid);
	if (flashcard) {
		res.json(flashcard);
	} else {
		res.status(404).json({
			message: `Flashcard with suuid "${suuid}" was not found.`
		})
	}
});

flashcardRouter.post('/', (_req, res) => {
	res.json('create flashcard');
});

flashcardRouter.put('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`replace flashcard with suuid ${suuid}`);
});

flashcardRouter.patch('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`replace fields on flashcard with suuid ${suuid}`);
});

flashcardRouter.delete('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`delete flashcard with suuid ${suuid}`);
});