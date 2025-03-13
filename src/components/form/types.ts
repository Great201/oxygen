export type FormScreen =
  | "loan-products" // Added to the beginning
  | "initial"
  | "video-instructions"
  | "customer-info"
  | "verification"
  | "payment-plan"
  | "loan-approval"
  | "video-recording"

export interface LoanFormData {
  loanType?: "salary" | "corper" // Added new field
  employer?: string
  amount?: string
  duration?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  verificationCode?: string
  acceptedTerms?: boolean
}

