import fs from 'fs/promises'
import path from 'path'

const BACKUP_DIR = path.join(process.cwd(), 'backup')

export async function backupFile(filePath: string) {
  const fileName = path.basename(filePath)
  const backupPath = path.join(BACKUP_DIR, `${fileName}_${Date.now()}`)
  
  await fs.mkdir(BACKUP_DIR, { recursive: true })
  await fs.copyFile(filePath, backupPath)
}

