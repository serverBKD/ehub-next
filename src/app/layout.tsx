import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const oswald = localFont({
	src: '../fonts/Oswald-VariableFont_wght.ttf',
})


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
			<body className={`${oswald.className} w-full min-h-screen bg-white`}>{children}</body>
		</html>
	)
}
