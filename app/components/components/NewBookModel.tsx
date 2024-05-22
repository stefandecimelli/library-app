'use client'
import { Modal, TextInput } from '@carbon/react'
import React, { FormEvent, ReactEventHandler, useState } from 'react'
import { useRouter } from "next/navigation";

type NewBookModelProps = {
	open: boolean
	close: ReactEventHandler<HTMLElement>
	createBook: Function
}

export default function NewBookModel({ open, close, createBook }: NewBookModelProps) {
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [cover, setCover] = useState("");
	const router = useRouter();

	const submission = (e: FormEvent<HTMLDivElement>) => {
		console.log("submitted")
		e.preventDefault()
		createBook({ name, author, cover_url: cover })
		close(e)
		router.refresh();
	}

	return (
		<Modal onRequestSubmit={submission} open={open} onRequestClose={close} modalHeading={"Add book to library"} primaryButtonText="Add" secondaryButtonText="Cancel">
			<TextInput id={"name"} labelText={"Name"} placeholder={"Enter the name of the book"} value={name} onChange={e => setName(e.target.value)} />
			<br/>
			<TextInput id={"author"} labelText={"Author"} placeholder={"Enter the author of the book"} value={author} onChange={e => setAuthor(e.target.value)} />
			<br/>
			<TextInput id={"cover"} labelText={"Cover"} placeholder={"Enter url of the image for the cover"} value={cover} onChange={e => setCover(e.target.value)} />
		</Modal>
	)
}
