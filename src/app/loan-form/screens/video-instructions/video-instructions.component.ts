import { Component, EventEmitter, Output } from '@angular/core';
import { LoanFormData } from '../../types';

@Component({
  selector: 'app-video-instructions',
  standalone: true,
  template: `
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold mb-2">Video Attestation</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Please read the instructions below
        </p>

        <ul class="space-y-4 text-sm">
          <li>Make sure you are in a well-lit environment while making the video.</li>
          <li>Make sure your camera is well-positioned.</li>
          <li>Kindly read the paragraph that will be shown on the recording page.</li>
          <li>Be audible enough.</li>
          <li>Click "I'm ready" when you are ready to start.</li>
        </ul>
      </div>

      <div class="space-y-2">
        <button class="w-full bg-blue-700 hover:bg-blue-800 rounded-none" (click)="handleNext()">
          I'm ready
        </button>
        <button class="w-full text-blue-600" (click)="handleNext()">
          Skip
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .space-y-6 { margin-bottom: 1.5rem; }
      .text-lg { font-size: 1.125rem; }
      .font-semibold { font-weight: 600; }
      .mb-2 { margin-bottom: 0.5rem; }
      .mb-4 { margin-bottom: 1rem; }
      .text-sm { font-size: 0.875rem; }
      .text-muted-foreground { color: #6b7280; }
      .space-y-4 li { margin-bottom: 1rem; }
      .w-full { width: 100%; }
      .bg-blue-700 { background-color: #1d4ed8; color: white; }
      .hover\:bg-blue-800:hover { background-color: #1e40af; }
      .rounded-none { border-radius: 0; }
      .text-blue-600 { color: #2563eb; }
    `
  ]
})
export class VideoInstructionsComponent {
  @Output() next = new EventEmitter<Partial<LoanFormData>>();

  handleNext() {
    this.next.emit({});
  }
}
