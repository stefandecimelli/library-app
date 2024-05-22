'use client'

import { Button, Grid, Column } from '@carbon/react';
import React from 'react'
import "./style.scss";

export default function Library() {
	return (
		<>
			<div className="main-library-banner">
				<div>
					<h1>Library</h1>
				</div>
				<div>
					<Button>Add book</Button>
				</div>
			</div>
			<div className="main-library">
				Tbd...
			</div>
		</>
	)
}
