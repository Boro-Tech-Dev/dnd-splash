'use client'

import { useState, FormEvent } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('You\'re on the list! We\'ll notify you when we launch.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please check your connection.')
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto scale-[0.75]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading' || status === 'success'}
            className="input-glow flex-1 text-sm"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-sm px-4 py-2"
          >
            <span>
              {status === 'loading' ? 'Joining...' : status === 'success' ? 'Subscribed!' : 'Notify Me'}
            </span>
          </button>
        </div>
        
        {message && (
          <p
            className={`text-sm text-center animate-fadeInUp ${
              status === 'success' ? 'text-electric-cyan' : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}

