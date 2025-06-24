'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface FilterControlsProps {
  category: string
  location: string
  priceRange: string
  categories: string[]
  locations: string[]
  priceRanges: string[]
  onCategoryChange: (value: string) => void
  onLocationChange: (value: string) => void
  onPriceRangeChange: (value: string) => void
}

export function FilterControls({
  category,
  location,
  priceRange,
  categories,
  locations,
  priceRanges,
  onCategoryChange,
  onLocationChange,
  onPriceRangeChange,
}: FilterControlsProps) {
  return (
    <section className="flex flex-wrap gap-6 mb-8">
      <div className="flex flex-col">
        <Label htmlFor="category-select" className="mb-1">Category</Label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="location-select" className="mb-1">Location</Label>
        <Select value={location} onValueChange={onLocationChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="price-select" className="mb-1">Price Range</Label>
        <Select value={priceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger className="w-[150px]" id="price-select">
            <SelectValue placeholder="Select price range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
