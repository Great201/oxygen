"use client"

import { Button } from "@/components/ui/button"
import type { LoanFormData } from "../types"

interface PaymentPlanProps {
  onNext: (data: Partial<LoanFormData>) => void
  amount?: string
  duration?: string
}

export function PaymentPlan({ onNext, amount = "150,000", duration = "6" }: PaymentPlanProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-6">Payment plan:</h3>

        <p className="text-lg">
          You repayment on a <span className="text-3xl text-blue-400 font-bold">₦{amount}</span> loan is
        </p>
        <p className="mb-2">
          <span className="text-3xl text-blue-400 font-bold">₦24,000</span> per month for{" "}
          <span className="text-3xl text-blue-400 font-bold">{duration} months</span>
        </p>

        <Button variant="link" className="text-blue-400 p-0 h-auto" onClick={() => {}}>
          Tap here to see full details
        </Button>
      </div>

      <Button className="w-full bg-blue-700 hover:bg-blue-800" onClick={() => onNext({})}>
        Continue
      </Button>
    </div>
  )
}

