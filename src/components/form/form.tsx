"use client";

import { useState } from "react";
import type { FormScreen, LoanFormData } from "./types";
import { InitialForm } from "./screens/initial-form";
import { VideoInstructions } from "./screens/video-instructions";
import { CustomerInfo } from "./screens/customer-info";
import { Verification } from "./screens/verification";
import { PaymentPlan } from "./screens/payment-plan";
import { LoanApproval } from "./screens/loan-approval";
import { VideoRecording } from "./screens/video-recording";
import { LoanProducts } from "./screens/loan-products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LoanForm() {
  const [currentScreen, setCurrentScreen] =
    useState<FormScreen>("loan-products"); // Changed initial state
  const [formData, setFormData] = useState<LoanFormData>({});

  const handleNext = (data: Partial<LoanFormData> = {}) => {
    setFormData((prev:any) => ({ ...prev, ...data }));

    const screens: FormScreen[] = [
      "loan-products", // Moved to first position
      "initial",
      "payment-plan",
      "customer-info",
      "verification",
      "loan-approval",
      "video-instructions",
      "video-recording",
    ];

    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "loan-products":
        return <LoanProducts onNext={handleNext} />;
      case "initial":
        return <InitialForm onNext={handleNext} />;
      case "video-instructions":
        return <VideoInstructions onNext={handleNext} />;
      case "customer-info":
        return <CustomerInfo onNext={handleNext} />;
      case "verification":
        return <Verification onNext={handleNext} email={formData.email} />;
      case "payment-plan":
        return (
          <PaymentPlan
            onNext={handleNext}
            amount={formData.amount}
            duration={formData.duration}
          />
        );
      case "loan-approval":
        return <LoanApproval onNext={handleNext} formData={formData} />;
      case "video-recording":
        return <VideoRecording onNext={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-0 rounded-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-center">
          Get A Loan In 5 Minutes
          <div className="mt-2 h-1 w-full max-w-[240px] mx-auto bg-gray-300" />
        </CardTitle>
      </CardHeader>
      <CardContent>{renderScreen()}</CardContent>
    </Card>
  );
}
