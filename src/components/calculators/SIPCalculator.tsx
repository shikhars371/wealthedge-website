"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  calculateSIP,
  formatCurrency,
} from "@/lib/calculators";

export default function SIPCalculator() {

  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(20);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const result = useMemo(() => {

    return calculateSIP(
      monthlyInvestment,
      years,
      expectedReturn
    );

  }, [
    monthlyInvestment,
    years,
    expectedReturn,
  ]);

  return (

    <div className="space-y-6 p-4 sm:space-y-8 sm:p-6">

      {/* Monthly Investment */}

      <div>

        <div className="flex items-center justify-between gap-2">

          <label className="text-sm font-semibold sm:text-base">
            Monthly Investment
          </label>

          <span className="shrink-0 text-sm font-bold text-blue-600 sm:text-base">
            ₹{monthlyInvestment.toLocaleString()}
          </span>

        </div>

<Slider
  value={monthlyInvestment}
  min={500}
  max={100000}
  step={500}
  onValueChange={(value) => {
    setMonthlyInvestment(value);
  }}
/>

      </div>

      {/* Years */}

      <div>

        <div className="flex items-center justify-between gap-2">

          <label className="text-sm font-semibold sm:text-base">
            Investment Period
          </label>

          <span className="shrink-0 text-sm font-bold text-blue-600 sm:text-base">
            {years} Years
          </span>

        </div>

<Slider
value={years}
  min={1}
  max={40}
  step={1}
onValueChange={(value) => {
    setYears(value);
}}
/>

      </div>

      {/* Return */}

      <div>

        <div className="flex items-center justify-between gap-2">

          <label className="text-sm font-semibold sm:text-base">
            Expected Return
          </label>

          <span className="shrink-0 text-sm font-bold text-blue-600 sm:text-base">
            {expectedReturn}%
          </span>

        </div>

<Slider
value={expectedReturn}
  min={1}
  max={20}
  step={0.5}
onValueChange={(value) => {
    setExpectedReturn(value);
}}
/>

      </div>

      {/* Results */}


<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

  <div className="space-y-5">

    <div className="flex items-center justify-between">

      <span className="text-slate-600">
        Invested Amount
      </span>

<h3 className="mt-2 text-sm font-bold text-green-600 sm:text-base lg:text-lg">
        {formatCurrency(result.investedAmount)}
      </h3>

    </div>

    <div className="border-t"></div>

    <div className="flex items-center justify-between">

      <span className="text-slate-600">
        Estimated Returns
      </span>

<h3 className="mt-2 text-sm font-bold text-green-600 sm:text-base lg:text-lg">
  {formatCurrency(result.estimatedReturns)}
</h3>

    </div>

    <div className="border-t"></div>

    <div className="flex items-center justify-between">

      <span className="font-semibold text-slate-800">
        Total Wealth
      </span>

<h3 className="mt-2 text-sm font-bold text-blue-700 sm:text-base lg:text-lg">
  {formatCurrency(result.futureValue)}
</h3>

    </div>

  </div>

</div>

      <Button className="h-11 w-full bg-green-600 hover:bg-green-700 sm:h-12">
        Chat on WhatsApp
      </Button>

    </div>

  );

}