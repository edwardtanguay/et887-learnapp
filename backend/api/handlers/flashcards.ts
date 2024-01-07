/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { JSONFile } from 'lowdb/node';
import { Low }  from 'lowdb';

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, 'backend/data/db.json');
const adapter = new JSONFile(dbPathAndFileName);
const db:any = new Low(adapter, []);
await db.read();

export const getFlashcards = () => {
	return db.data.flashcards;
}

export const createFlashcard = async (flashcard: any) => {
	const _flashcards = db.data.flashcards;
	_flashcards.push(flashcard);
	await db.write();
	return flashcard;
}



