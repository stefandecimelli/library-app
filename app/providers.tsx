'use client';

import React, { ReactNode } from "react";
import { Content, Theme } from '@carbon/react';
import Header from "./header/page";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<Theme theme="g100">
			<Header />
			<Content>{children}</Content>
		</Theme>
	);
}