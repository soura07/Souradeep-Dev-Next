import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { schibstedGrotesk } from '@/fonts/font'
import './globals.css'
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import StyledComponentsRegistry from '@/lib/registry';
import LoadingWrapper from '@/components/LoadingWrapper';
import InteractiveBackground from '@/components/ui/InteractiveBackground';


export const metadata: Metadata = {
  title: 'Souradeep',
  description: 'Portfolio website',
  icons: {
    icon: '/img/profile-left.png',
    shortcut: '/img/profile-left.png',
    apple: '/img/profile-left.png',
  }
}

export const viewport: Viewport = {
  themeColor: "#000000"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} antialiased min-h-screen transition-colors duration-300`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <InteractiveBackground />
            <LoadingWrapper>
              <NavBar />
              {children}
              <SpeedInsights />
            </LoadingWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
