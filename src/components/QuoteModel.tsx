'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function QuoteModal({
  isOpen,
  onClose,
  artistName
}: {
  isOpen: boolean
  onClose: () => void
  artistName: string
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message, artist: artistName })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ask for Quote – {artistName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            required
            placeholder="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Send Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
