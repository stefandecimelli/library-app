'use server';

import { Book, PrismaClient } from '@prisma/client';

const database = new PrismaClient();

export async function getBooks() {
	const books = await database.book.findMany();
	return books;
}

export async function createBook(args: Book) {
	await database.book.create({
		data: args
	});
}