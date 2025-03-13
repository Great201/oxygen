"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { LoanFormData } from "../types"

interface CustomerInfoProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function CustomerInfo({ onNext }: CustomerInfoProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onNext({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Customer Information</h3>
        <p className="text-sm text-muted-foreground mb-4">Please enter the details below</p>

        <div className="flex justify-end mb-4">
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">Step 1 of 2</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            First name
          </label>
          <Input id="firstName" name="firstName" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last name
          </label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone number
          </label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
        Continue
      </Button>
    </form>
  )
}

