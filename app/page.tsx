'use server'

import {getBooks, createBook} from "./actions/bookActions";
import Library from "./components/page";

export default async function Home() {
  const books = await getBooks();
  return <Library books={books} createBook={createBook} />;
}
