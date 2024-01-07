import db from "../../backend/data/db.json";

const flashcards = db.flashcards;

export const PageWelcome = () => {
	return (
		<>
			<p>This is the welcome page.</p>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map(flashcard => {
					return (
						<li key={flashcard.suuid}>{flashcard.front}</li>
					)
				})}
			</ul>
		</>
	);
};
