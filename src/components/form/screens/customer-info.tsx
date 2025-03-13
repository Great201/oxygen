"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { LoanFormData } from "../types"
import { Loader2 } from "lucide-react"

interface CustomerInfoProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function CustomerInfo({ onNext }: CustomerInfoProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<LoanFormData>>({})

  const handleFirstStep = (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    const stepData = {
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
    }
    setFormData((prev) => ({ ...prev, ...stepData }))
    setStep(2)
  }

  const handleSecondStep = (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    const stepData = {
      ippisNumber: data.get("ippisNumber") as string,
      bvn: data.get("bvn") as string,
      stateOfOrigin: data.get("stateOfOrigin") as string,
    }
    onNext({ ...formData, ...stepData })
  }

  if (step === 1) {
    return (
      <form onSubmit={handleFirstStep} className="space-y-6">
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
            <Input id="firstName" name="firstName" defaultValue={formData.firstName} required />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last name
            </label>
            <Input id="lastName" name="lastName" defaultValue={formData.lastName} required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input id="email" name="email" type="email" defaultValue={formData.email} required />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone number
            </label>
            <Input id="phone" name="phone" type="tel" defaultValue={formData.phone} required />
          </div>
        </div>

        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
          Continue
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSecondStep} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Customer Information</h3>
        <p className="text-sm text-muted-foreground mb-4">Please enter the details below</p>

        <div className="flex justify-end mb-4 items-center gap-2">
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">Step 2 of 2</div>
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="ippisNumber" className="text-sm font-medium">
            IPPIS number
          </label>
          <Input id="ippisNumber" name="ippisNumber" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="bvn" className="text-sm font-medium">
            BVN
          </label>
          <Input id="bvn" name="bvn" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="stateOfOrigin" className="text-sm font-medium">
          State Of Origin
        </label>
        <Input id="stateOfOrigin" name="stateOfOrigin" required />
      </div>

      <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
        Continue
      </Button>
    </form>
  )
}

