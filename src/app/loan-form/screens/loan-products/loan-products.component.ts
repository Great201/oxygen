import { Component, Output, EventEmitter } from '@angular/core';

interface LoanProduct {
  id: number;
  title: string;
  description: string;
}

interface LoanFormData {
  loanType?: string;
}

@Component({
  selector: 'app-loan-products',
  standalone: true,
  template: `
    <div class="w-full p-4">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Loan Products</h2>
      <div class="flex overflow-x-auto gap-4 no-scrollbar pb-4">
        @for (product of loanProducts; track $index) {
          <div class="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div class="mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              <h3 class="text-lg font-semibold text-gray-800">{{ product.title }}</h3>
            </div>
            <p class="text-gray-600 text-sm mb-6">{{ product.description }}</p>
            <button 
              (click)="next.emit({ loanType: product.title.toLowerCase() })"
              class="rounded-none py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors duration-200"
            >
              Apply Here
            </button>
          </div>
        }
      </div>
    </div>
  `
})
export class LoanProductsComponent {
  @Output() next = new EventEmitter<Partial<LoanFormData>>();

  loanProducts: LoanProduct[] = [
    {
      id: 1,
      title: 'Salary Loan',
      description: 'Oxygen Salary Loan offers quick financial access to salary earners. Borrow between N50,000 and N5,000,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.'
    },
    {
      id: 2,
      title: 'Corper Loan',
      description: 'Oxygen Salary Loan offers quick financial access to salary earners. Borrow between N50,000 and N5,000,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.'
    }
  ];
}
