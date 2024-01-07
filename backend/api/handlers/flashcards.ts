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
	const jobs = db.data.flashcards;
	return jobs;
}

export const createFlashcard = () => {
	console.log('created one flashcard');
}



