'use client'
import React, { ReactNode } from "react";
import { Content, Theme } from '@carbon/react';
import Header from "./components/Header";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<Theme theme="g100">
			<Header />
			<Content style={{height: "99vh", padding: 0}}>{children}</Content>
		</Theme>
	);
}