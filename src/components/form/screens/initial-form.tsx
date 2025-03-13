"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { LoanFormData } from "../types"

interface InitialFormProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function InitialForm({ onNext }: InitialFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onNext({
      employer: formData.get("employer") as string,
      amount: formData.get("amount") as string,
      duration: formData.get("duration") as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="employer" className="text-sm font-medium">
          Select employer
        </label>
        <Select name="employer" required>
          <SelectTrigger id="employer">
            <SelectValue placeholder="Select employer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="employer1">Employer 1</SelectItem>
            <SelectItem value="employer2">Employer 2</SelectItem>
            <SelectItem value="employer3">Employer 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm font-medium">
          Enter amount
        </label>
        <Input id="amount" name="amount" type="text" placeholder="Enter amount" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="duration" className="text-sm font-medium">
          Duration
        </label>
        <Select name="duration" required>
          <SelectTrigger id="duration">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Month</SelectItem>
            <SelectItem value="3">3 Months</SelectItem>
            <SelectItem value="6">6 Months</SelectItem>
            <SelectItem value="12">12 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
        Continue
      </Button>
    </form>
  )
}

