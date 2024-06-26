'use client'

import { Book } from '@prisma/client';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Button } from '@carbon/react';
import { useRouter } from "next/navigation";
import Image from "next/image"

const BookList = ({ books, deleteBook }: { books: Book[], deleteBook: Function }) => {
	const router = useRouter();
	const deleteBookSubmit = (id: number) => {
		deleteBook(id)
		router.refresh()
	}

	return (
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeader />
						<TableHeader>Title</TableHeader>
						<TableHeader>Author</TableHeader>
						<TableHeader />
					</TableRow>
				</TableHead>
				<TableBody>
					{books?.map((book) => (
						<TableRow key={book.id}>
							<TableCell>
								<img alt={"(cover not found)"} src={book.cover_url} height={200} />
							</TableCell>
							<TableCell>{book.name}</TableCell>
							<TableCell>{book.author}</TableCell>
							<TableCell>
								<Button onClick={() => deleteBookSubmit(book.id)} >Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default BookList;
