"use client"

import { Button } from "@/components/ui/button"
import type { LoanFormData } from "../types"

interface LoanProductsProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function LoanProducts({ onNext }: LoanProductsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Loan Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md p-4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6V18M18 12H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="text-lg font-medium mb-2">Salary Loan</h4>
          <p className="text-sm text-gray-500 mb-4">
            Oxygen Salary Loan offers quick financial relief for employed Nigerians. Borrow between ₦50,000 and ₦500,000
            with flexible repayment terms of 3 to 12 months. We prioritize transparency and rapid processing typically
            disbursing funds with lightning speed.
          </p>
          <Button className="bg-[#2B3674] hover:bg-[#1B254B] text-white" onClick={() => onNext({ loanType: "salary" })}>
            Apply Here
          </Button>
        </div>

        <div className="border rounded-md p-4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6V18M18 12H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="text-lg font-medium mb-2">Corper Loan</h4>
          <p className="text-sm text-gray-500 mb-4">
            Oxygen Salary Loan offers quick financial relief for employed Nigerians. Borrow between ₦50,000 and ₦500,000
            with flexible repayment terms of 3 to 12 months. We prioritize transparency and rapid processing typically
            disbursing funds with lightning speed.
          </p>
          <Button className="bg-[#2B3674] hover:bg-[#1B254B] text-white" onClick={() => onNext({ loanType: "corper" })}>
            Apply Here
          </Button>
        </div>
      </div>
    </div>
  )
}

