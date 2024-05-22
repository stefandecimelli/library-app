'use server'

import {getBooks, createBook, deleteBook} from "./actions/bookActions";
import Library from "./components/Library";

export default async function Home() {
  const books = await getBooks();
  return <Library books={books} createBook={createBook} deleteBook={deleteBook} />;
}
