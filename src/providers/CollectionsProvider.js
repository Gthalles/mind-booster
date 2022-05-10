import React, { createContext, useContext, useEffect, useState } from "react";
import { collections } from "../assets/data/collections";


export const CollectionContext = createContext({});

export const CollectionsProvider = ({ children }) => {
	const [ collectionList, setCollectionList ] = useState(collections);

	useEffect(() => {
		setCollectionList(collectionList);
		console.log(collectionList);
	}, [ collectionList?.length ]);

	function createCollection ({ title }) {
		const newCollection = {
			id: collectionList.length + 55,
			title: title
		}

		collectionList.push(newCollection);

		return collectionList;
	}

	function readCollections () {
		return collectionList;
	}

	function updateCollection ({ id, title }) {
		collectionList?.forEach((collection) => {
			if (collection.id == id) {
				collection.title = title;
				console.log(collectionList);
			}
		});

		return collectionList;
	}

	function deleteCollection (title) {
		console.log(collectionList);
		setCollectionList(collectionList.filter((collection) => collection.title != title));
		console.log(collectionList);
	}

	return (
		<CollectionContext.Provider value={{ createCollection, readCollections, updateCollection, deleteCollection, collectionList }}>
			{ children }
		</CollectionContext.Provider>
	);
}


export const useCollectionContext = () => useContext(CollectionContext);