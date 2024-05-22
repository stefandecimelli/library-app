'use client'

import { Button } from '@carbon/react';
import React, { useState } from 'react'
import "./style.scss";
import BookList from './components/BookList';
import BookListContainer from './components/BookListContainer';
import { Book } from '@prisma/client';
import NewBookModel from './components/NewBookModel';

export default function Library({books, createBook}: {books: Book[], createBook: Function}) {
	const [showNewBookModel, setShowNewBookModel] = useState(false)
	return (
		<>
			<div className="main-library-banner">
				<div>
					<h1>Library</h1>
				</div>
				<div>
					<Button onClick={() => setShowNewBookModel(!showNewBookModel)}>Add book</Button>
				</div>
			</div>
			<BookListContainer>
				<BookList books={books} />
			</BookListContainer>
			<NewBookModel createBook={createBook} open={showNewBookModel} close={() => setShowNewBookModel(false)} />
		</>
	)
}
