'use client'

import { useState } from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import QuoteModal from '@/components/QuoteModel' 
import { Button } from '@/components/ui/button'

export interface Artist {
  id: number
  name: string
  category: string
  priceRange: string
  location: string
}

export default function ArtistCard({ artists }: { artists: Artist[] }) {
  const [openModalFor, setOpenModalFor] = useState<Artist | null>(null)

  const cards = artists.map((artist, idx) => ({
    title: artist.name,
    description: `${artist.category} · ₹${artist.priceRange} · ${artist.location}`,
    link: `#quote-${artist.id || idx}`,
    button: (
      <Button
        variant="default"
        onClick={(e) => {
          e.preventDefault()
          setOpenModalFor(artist)
        }}
        className="mt-4 w-full"
      >
        Ask for Quote
      </Button>
    )
  }))

  return (
    <div className="max-w-6xl mx-auto px-4">
      <HoverEffect items={cards} />
      {openModalFor && (
        <QuoteModal
          isOpen={!!openModalFor}
          onClose={() => setOpenModalFor(null)}
          artistName={openModalFor.name}
        />
      )}
    </div>
  )
}



