'use client'

import React from 'react'

export default function BookListContainer({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="main-library">
			{children}
		</div>
	)
}
