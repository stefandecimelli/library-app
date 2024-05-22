'use client'

import { Book } from '@prisma/client';
import getBooks from '../../actions/bookActions';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';

const BookList = ({books}: {books: Book[]}) => {
	return (
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeader>Title</TableHeader>
						<TableHeader>Author</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{books?.map((book) => (
						<TableRow key={book.id}>
							<TableCell>{book.name}</TableCell>
							<TableCell>{book.author}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default BookList;
