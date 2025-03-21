export type FormScreen =
  | "loan-products"
  | "initial"
  | "video-instructions"
  | "customer-info"
  | "verification"
  | "payment-plan"
  | "loan-approval"
  | "video-recording"

export interface LoanFormData {
  employer?: string
  amount?: string
  duration?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  // Added new fields
  ippisNumber?: string
  bvn?: string
  stateOfOrigin?: string
  verificationCode?: string
  acceptedTerms?: boolean
}

