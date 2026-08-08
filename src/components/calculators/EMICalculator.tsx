"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import {
    calculateEMI,
    formatCurrency,
} from "@/lib/calculators";

export default function EMICalculator() {

    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const result = useMemo(() => {

        return calculateEMI(
            loanAmount,
            interestRate,
            tenure
        );

    }, [
        loanAmount,
        interestRate,
        tenure,
    ]);

    return (

        <div className="space-y-8">

            {/* Loan Amount */}

            <div>

                <div className="flex justify-between">

                    <label>Loan Amount</label>

                    <span>{formatCurrency(loanAmount)}</span>

                </div>

                <Slider
                    value={loanAmount}
                    min={100000}
                    max={50000000}
                    step={100000}
                    onValueChange={(value) => {
                        if (typeof value === "number") {
                            setLoanAmount(value);
                        }
                    }}
                />

            </div>

            {/* Interest */}

            <div>

                <div className="flex justify-between">

                    <label>Interest Rate</label>

                    <span>{interestRate}%</span>

                </div>

                <Slider
                    value={interestRate}
                    min={5}
                    max={18}
                    step={0.1}
                    onValueChange={(value) => {
                        if (typeof value === "number") {
                            setInterestRate(value);
                        }
                    }}
                />

            </div>

            {/* Tenure */}

            <div>

                <div className="flex justify-between">

                    <label>Loan Tenure</label>

                    <span>{tenure} Years</span>

                </div>

                <Slider
                    value={tenure}
                    min={1}
                    max={30}
                    step={1}
                    onValueChange={(value) => {
                        if (typeof value === "number") {
                            setTenure(value);
                        }
                    }}
                />

            </div>

            {/* Results */}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <div className="space-y-5">

                    <div className="flex items-center justify-between">

                        <span className="text-slate-600">
                            Monthly EMI
                        </span>

                        <h3 className="mt-2 text-sm font-bold text-blue-700 sm:text-base lg:text-lg">
                            {formatCurrency(result.emi)}
                        </h3>

                    </div>

                    <div className="border-t"></div>

                    <div className="flex items-center justify-between">

                        <span className="text-slate-600">
                            Total Interest
                        </span>

                        <h3 className="mt-2 text-sm font-bold text-green-600 sm:text-base lg:text-lg">
                            {formatCurrency(result.totalInterest)}
                        </h3>

                    </div>

                    <div className="border-t"></div>

                    <div className="flex items-center justify-between">

                        <span className="font-semibold text-slate-800">
                            Total Payment
                        </span>

                        <h3 className="mt-2 text-sm font-bold text-blue-700 sm:text-base lg:text-lg">
                            {formatCurrency(result.totalPayment)}
                        </h3>

                    </div>

                </div>

            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
                Talk to an EMI Expert
            </Button>

        </div>

    );

}