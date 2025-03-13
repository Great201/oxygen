"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { LoanFormData } from "../types"
import { useState } from "react"

interface LoanApprovalProps {
  onNext: (data: Partial<LoanFormData>) => void
  formData: LoanFormData
}

export function LoanApproval({ onNext, formData }: LoanApprovalProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Loan Approval</h3>
        <p className="text-sm text-muted-foreground mb-4">
          We are pleased to inform you that your loan application has been approved. Please find the details below.
        </p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="font-medium">Isaac Onyeka</div>
      </div>

      <div className="bg-blue-50 rounded-md p-4 grid grid-cols-2 gap-y-4">
        <div>
          <div className="text-sm text-gray-500">Loan Amount</div>
          <div className="font-bold">₦150,000</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Monthly Repayment</div>
          <div className="font-bold">₦24,000</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Loan Duration</div>
          <div className="font-bold">3 Months</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Repayment Date</div>
          <div className="font-bold">31-07-2024</div>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={acceptedTerms}
          onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
        />
        <label htmlFor="terms" className="text-sm">
          By clicking this box, you accept the loan <span className="text-blue-400">Terms</span> &{" "}
          <span className="text-blue-400">Conditions</span>
        </label>
      </div>

      <Button
        className="w-full bg-blue-700 hover:bg-blue-800"
        onClick={() => onNext({ acceptedTerms })}
        disabled={!acceptedTerms}
      >
        Continue
      </Button>
    </div>
  )
}

