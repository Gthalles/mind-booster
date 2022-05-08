import React, { createContext, useContext, useEffect, useState } from "react";
import { flashcardsJson, flashcards } from "../assets/data/flashcards";


export const FlashcardContext = createContext({});

export const FlashcardProvider = ({ children }) => {
	const [ flashcardList, setFlashcardList ] = useState(flashcards);

	useEffect(() => {
		setFlashcardList(flashcardList);
		console.log(flashcardList);
	}, [ flashcardList?.length ]);

	function createFlashcard ({ front, back}) {
		const newFlashcard = {
			id: flashcardList.length + 55,
			front: front,
			back: back,
		}

		flashcardList.push(newFlashcard);

		return flashcardList;
	}

	function readFlashcards () {
		return flashcardList;
	}

	function updateFlashcard ({ id, front, back }) {
		flashcardList?.forEach((flashcard) => {
			if (flashcard.id == id) {
				flashcard.back = back;
				flashcard.front = front;
				console.log(flashcardList);
			}
		});

		return flashcardList;
	}

	function deleteFlashcard (id) {
		return setFlashcardList(flashcardList.filter((flashcard) => flashcard.id != id));
	}

	return (
		<FlashcardContext.Provider value={{ createFlashcard, readFlashcards, flashcardList, updateFlashcard, deleteFlashcard }}>
			{ children }
		</FlashcardContext.Provider>
	);
};

export const useFlashcardContext = () => useContext(FlashcardContext);

