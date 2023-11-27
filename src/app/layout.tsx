/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { oswald } from '@/fonts/fonts.js'
import './globals.css'
import loading from '@/app/loading.tsx'
import notfound from '@/app/not-found.jsx'




export const metadata: Metadata = {
	title: 'Community HUB Box',
	description: 'hub',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${oswald.className} w-full min-h-screen bg-white`}>
				{children}
			</body>
		</html>
	)
}
