import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

type CreateFileFolderProps = {
  isOpen: boolean
  onClose: () => void
  onCreate: (name: string, isDirectory: boolean) => void
}

export function CreateFileFolder({ isOpen, onClose, onCreate }: CreateFileFolderProps) {
  const [name, setName] = useState('')
  const [isDirectory, setIsDirectory] = useState(false)

  const handleCreate = () => {
    if (name) {
      onCreate(name, isDirectory)
      setName('')
      setIsDirectory(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New File/Folder</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <RadioGroup defaultValue="file" onValueChange={(value) => setIsDirectory(value === 'folder')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="file" id="file" />
              <Label htmlFor="file">File</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="folder" id="folder" />
              <Label htmlFor="folder">Folder</Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

