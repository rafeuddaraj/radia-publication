'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ImageUploadProps = {
  onUpload: (imageUrl: string) => void
}

export function ImageUpload({ onUpload }: ImageUploadProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const { url } = await response.json()
        onUpload(url)
        setFile(null)
      } else {
        console.error('Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        accept="image/*"
      />
      <Button onClick={handleUpload} disabled={!file}>
        Upload Image
      </Button>
    </div>
  )
}

