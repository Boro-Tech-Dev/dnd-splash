import { promises as fs } from 'fs'
import path from 'path'

export interface EmailSubscription {
  email: string
  timestamp: string
  ip?: string
}

const emailsFilePath = path.join(process.cwd(), 'public', 'emails.json')

export async function saveEmail(email: string, ip?: string): Promise<void> {
  try {
    let emails: EmailSubscription[] = []
    
    // Try to read existing emails
    try {
      const fileContent = await fs.readFile(emailsFilePath, 'utf-8')
      emails = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist yet, start with empty array
      console.log('Creating new emails file')
    }
    
    // Check if email already exists
    const emailExists = emails.some(sub => sub.email === email)
    if (emailExists) {
      throw new Error('Email already subscribed')
    }
    
    // Add new email
    const newSubscription: EmailSubscription = {
      email,
      timestamp: new Date().toISOString(),
      ip,
    }
    
    emails.push(newSubscription)
    
    // Write back to file
    await fs.writeFile(emailsFilePath, JSON.stringify(emails, null, 2))
  } catch (error) {
    if (error instanceof Error && error.message === 'Email already subscribed') {
      throw error
    }
    throw new Error('Failed to save email')
  }
}

export async function getEmails(): Promise<EmailSubscription[]> {
  try {
    const fileContent = await fs.readFile(emailsFilePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return []
  }
}

