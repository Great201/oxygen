"use client"

import { Button } from "@/components/ui/button"
import type { LoanFormData } from "../types"

interface VideoInstructionsProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function VideoInstructions({ onNext }: VideoInstructionsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Video Attestation</h3>
        <p className="text-sm text-muted-foreground mb-4">Please read the instructions below</p>

        <ul className="space-y-4 text-sm">
          <li>Make sure you are in a well lit environment while making the video.</li>
          <li>Make sure your camera is well positioned.</li>
          <li>Kindly read the paragraph that will be shown on the recording page</li>
          <li>Be audible enough.</li>
          <li>Click "I'm ready" when you are ready to start</li>
        </ul>
      </div>

      <div className="space-y-2">
        <Button className="w-full bg-blue-700 hover:bg-blue-800 rounded-none" onClick={() => onNext({})}>
          I'm ready
        </Button>
        <Button variant="link" className="w-full text-blue-600" onClick={() => onNext({})}>
          Skip
        </Button>
      </div>
    </div>
  )
}

