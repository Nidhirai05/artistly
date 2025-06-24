'use client'

import { useState, useMemo } from 'react'
import ArtistCard from '@/components/ArtistCard'
import artistsData from '@/data/artists.json'
import { FilterControls } from '@/components/FilterControl'

const categories = ['All', 'Singer', 'DJ', 'Dancer', 'Speaker']
const locations = ['All', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai']
const priceRanges = ['All', '0-5000', '5000-10000', '10000-15000']

export default function ArtistsPage() {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [locationFilter, setLocationFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')

  const filteredArtists = useMemo(() => {
    return artistsData.filter((artist) => {
      const matchCategory = categoryFilter === 'All' || artist.category === categoryFilter
      const matchLocation = locationFilter === 'All' || artist.location === locationFilter

      const [minPrice, maxPrice] = artist.priceRange.split('-').map(Number)

      let matchPrice = true
      if (priceFilter !== 'All') {
        const [filterMin, filterMax] = priceFilter.split('-').map(Number)
        matchPrice = minPrice >= filterMin && maxPrice <= filterMax
      }

      return matchCategory && matchLocation && matchPrice
    })
  }, [categoryFilter, locationFilter, priceFilter])

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Explore Artists
      </h1>
      <div className="flex justify-center mb-8 px-4">
        <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-md p-6">
          <FilterControls
            category={categoryFilter}
            location={locationFilter}
            priceRange={priceFilter}
            categories={categories}
            locations={locations}
            priceRanges={priceRanges}
            onCategoryChange={setCategoryFilter}
            onLocationChange={setLocationFilter}
            onPriceRangeChange={setPriceFilter}
          />
        </div>
      </div>

      {/* Artist Cards */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl">
          <section>
            {filteredArtists.length === 0 ? (
              <p className="text-white text-center">No artists found matching your criteria.</p>
            ) : (
              <ArtistCard artists={filteredArtists} />
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
