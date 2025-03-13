"use client"

import { Button } from "@/components/ui/button"
import type { LoanFormData } from "../types"
import { Play } from "lucide-react"

interface VideoRecordingProps {
  onNext: (data: Partial<LoanFormData>) => void
}

export function VideoRecording({ onNext }: VideoRecordingProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Video Attestation</h3>
        <p className="text-sm text-muted-foreground mb-4">Please read the instructions below</p>
      </div>

      <div className="relative aspect-video bg-cover bg-center rounded-md overflow-hidden " style={{backgroundImage: "url('/man2.jpg')"}}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="text-white h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Button className="w-full bg-blue-700 hover:bg-blue-800 rounded-none" onClick={() => onNext({})}>
          Submit
        </Button>
        <Button variant="outline" className="w-full" onClick={() => {}}>
          Re-do
        </Button>
      </div>
    </div>
  )
}

