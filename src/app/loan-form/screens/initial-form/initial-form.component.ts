import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'app-initial-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="handleSubmit()" class="space-y-6">
      <div class="space-y-2">
        <label hlmLabel for="employer" class="text-sm font-medium">Select employer</label>
        <select id="employer" [(ngModel)]="employer" name="employer" required class="w-full border p-2 rounded">
          <option value="" disabled selected>Select employer</option>
          <option value="employer1">Employer 1</option>
          <option value="employer2">Employer 2</option>
          <option value="employer3">Employer 3</option>
        </select>
      </div>

      <div class="space-y-2">
        <label for="amount" class="text-sm font-medium">Enter amount</label>
        <input hlmInput id="amount" name="amount" type="text" [(ngModel)]="amount" placeholder="Enter amount" required class="w-full border p-2 rounded" />
      </div>

      <div class="space-y-2">
        <label for="duration" class="text-sm font-medium">Duration</label>
        <select id="duration" [(ngModel)]="duration" name="duration" required class="w-full border p-2 rounded">
          <option value="" disabled selected>Select duration</option>
          <option value="1">1 Month</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
        </select>
      </div>

      <button type="submit" class="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-none w-full">
        Continue
      </button>
    </form>
  `,
})
export class InitialFormComponent {
  employer: string = '';
  amount: string = '';
  duration: string = '';

  @Output() next = new EventEmitter<Partial<{ employer: string; amount: string; duration: string }>>();

  handleSubmit() {
    this.next.emit({
      employer: this.employer,
      amount: this.amount,
      duration: this.duration,
    });
  }
}
