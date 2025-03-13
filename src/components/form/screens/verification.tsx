"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { LoanFormData } from "../types"
import { useState } from "react"

interface VerificationProps {
  onNext: (data: Partial<LoanFormData>) => void
  email?: string
}

export function Verification({ onNext, email = "michael.ashefor@gmail.com" }: VerificationProps) {
  const [code, setCode] = useState<string[]>(Array(6).fill(""))

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ verificationCode: code.join("") })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-sm">We've sent a 6-digit code to</p>
        <p className="text-blue-600 font-medium">{email}</p>
        <p className="text-sm">Please enter it below.</p>
      </div>

      <div className="flex justify-center gap-2">
        {code.map((digit, index) => (
          <Input
            key={index}
            id={`code-${index}`}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-12 h-12 text-center text-lg"
            maxLength={1}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        ))}
      </div>

      <div className="text-center">
        <Button type="button" variant="link" className="text-blue-600" onClick={() => {}}>
          Click to send new code.
        </Button>
      </div>

      <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 rounded-none" disabled={code.some((digit) => !digit)}>
        Verify
      </Button>
    </form>
  )
}

