import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          {/* Additional sections will be added here */}
        </main>
      </div>
    </ThemeProvider>
  )
} 