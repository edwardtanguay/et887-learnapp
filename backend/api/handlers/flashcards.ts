/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { JSONFile } from 'lowdb/node';
import { Low }  from 'lowdb';
import * as tools from '../tools';

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, 'backend/data/db.json');
const adapter = new JSONFile(dbPathAndFileName);
const db:any = new Low(adapter, []);
await db.read();

export const getFlashcards = () => {
	return db.data.flashcards;
}

export const createFlashcard = async (flashcard: any) => {
	flashcard.suuid = tools.generateSuuid();
	const flashcards = db.data.flashcards;
	flashcards.push(flashcard);
	await db.write();
	return flashcard;
}



