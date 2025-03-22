import { Component, signal } from '@angular/core';
import { LoanFormData, FormScreen } from './types';
import { CommonModule } from '@angular/common';
import { LoanProductsComponent } from './screens/loan-products/loan-products.component';
import { InitialFormComponent } from './screens/initial-form/initial-form.component';
import { VideoInstructionsComponent } from './screens/video-instructions/video-instructions.component';
// import { CustomerInfoComponent } from './screens/customer-info.component';
// import { VerificationComponent } from './screens/verification.component';
// import { PaymentPlanComponent } from './screens/payment-plan.component';
// import { LoanApprovalComponent } from './screens/loan-approval.component';
// import { VideoRecordingComponent } from './screens/video-recording.component';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [
    CommonModule,
    LoanProductsComponent,
    InitialFormComponent,
    VideoInstructionsComponent,
    // CustomerInfoComponent,
    // VerificationComponent,
    // PaymentPlanComponent,
    // LoanApprovalComponent,
    // VideoRecordingComponent
  ],
  template: `
    <section class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <div class="text-center mb-6">
        <h3 class="text-2xl font-bold text-black mb-2">
          Get A Loan In 5 Minutes
        </h3>
        <div class="h-1 w-48 mx-auto bg-black rounded-full"></div>
      </div>
      <div class="space-y-6">
        <ng-container [ngSwitch]="currentScreen">
          <app-loan-products *ngSwitchCase="'loan-products'" (next)="handleNext()"></app-loan-products>
          <app-initial-form *ngSwitchCase="'initial'" (next)="handleNext()"></app-initial-form>
          <app-video-instructions *ngSwitchCase="'video-instructions'" (next)="handleNext()"></app-video-instructions>
          <!-- <app-customer-info *ngSwitchCase="'customer-info'" (next)="handleNext()"></app-customer-info>
          <app-verification *ngSwitchCase="'verification'" [email]="formData.email" (next)="handleNext()"></app-verification>
          <app-payment-plan *ngSwitchCase="'payment-plan'" [amount]="formData.amount" [duration]="formData.duration" (next)="handleNext()"></app-payment-plan>
          <app-loan-approval *ngSwitchCase="'loan-approval'" [formData]="formData" (next)="handleNext()"></app-loan-approval>
          <app-video-recording *ngSwitchCase="'video-recording'" (next)="handleNext()"></app-video-recording> -->
        </ng-container>
      </div>
    </section>
  `,
})
export class LoanFormComponent {
  currentScreen: FormScreen = 'loan-products';
  formData: Partial<LoanFormData> = {};

  handleNext(data: Partial<LoanFormData> = {}): void {
    this.formData = { ...this.formData, ...data };
  
    const screens: FormScreen[] = [
      'loan-products', 'initial', 'payment-plan', 'customer-info',
      'verification', 'loan-approval', 'video-instructions', 'video-recording'
    ];
  
    const currentIndex = screens.indexOf(this.currentScreen);
    if (currentIndex < screens.length - 1) {
      this.currentScreen = screens[currentIndex + 1];
    }
  }
}
