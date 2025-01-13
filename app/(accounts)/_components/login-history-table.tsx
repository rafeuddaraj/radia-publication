'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Sample data
const loginHistory = [
  {
    id: '1',
    device: 'iPhone 12',
    loginTime: '2023-05-15 14:30:00',
    ipAddress: '192.168.1.1',
    location: 'New York, USA',
  },
  // Add more sample login history entries here
]

export function LoginHistoryTable() {
  const [sortColumn, setSortColumn] = useState<keyof typeof loginHistory[0] | ''>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [searchTerm, setSearchTerm] = useState('')

  const sortedHistory = [...loginHistory].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    }
    return 0
  })

  const filteredHistory = sortedHistory.filter(
    (entry) =>
      entry.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.ipAddress.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSort = (column: keyof typeof loginHistory[0]) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by device or IP address"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('device')} className="p-0">
                  Device
                  {sortColumn === 'device' && (
                    sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('loginTime')} className="p-0">
                  Login Time
                  {sortColumn === 'loginTime' && (
                    sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead className="hidden md:table-cell">IP Address</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHistory.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.device}</TableCell>
                <TableCell>{entry.loginTime}</TableCell>
                <TableCell className="hidden md:table-cell">{entry.ipAddress}</TableCell>
                <TableCell className="hidden md:table-cell">{entry.location}</TableCell>
                <TableCell className="text-right">
                  <Button variant="destructive" size="sm">
                    Report
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

