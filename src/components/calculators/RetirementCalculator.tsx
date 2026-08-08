"use client";

import { useMemo, useState } from "react";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import {
  calculateRetirement,
  formatCurrency,
} from "@/lib/calculators";

export default function RetirementCalculator() {

  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(() => {

    return calculateRetirement(
      currentAge,
      retirementAge,
      monthlyExpense,
      inflation,
      returnRate
    );

  }, [
    currentAge,
    retirementAge,
    monthlyExpense,
    inflation,
    returnRate,
  ]);

  return (

    <div className="space-y-8">

      {/* Current Age */}

      <div>

        <div className="flex justify-between">

          <label>Current Age</label>

          <span>{currentAge} Years</span>

        </div>

        <Slider
          value={currentAge}
          min={20}
          max={55}
          onValueChange={setCurrentAge}
        />

      </div>

      {/* Retirement Age */}

      <div>

        <div className="flex justify-between">

          <label>Retirement Age</label>

          <span>{retirementAge} Years</span>

        </div>

        <Slider
          value={retirementAge}
          min={50}
          max={75}
          onValueChange={setRetirementAge}
        />

      </div>

      {/* Monthly Expense */}

      <div>

        <div className="flex justify-between">

          <label>Monthly Expense</label>

          <span>
            {formatCurrency(monthlyExpense)}
          </span>

        </div>

        <Slider
          value={monthlyExpense}
          min={10000}
          max={500000}
          step={5000}
          onValueChange={setMonthlyExpense}
        />

      </div>

      {/* Inflation */}

      <div>

        <div className="flex justify-between">

          <label>Inflation</label>

          <span>{inflation}%</span>

        </div>

        <Slider
          value={inflation}
          min={3}
          max={10}
          step={0.5}
          onValueChange={setInflation}
        />

      </div>

      {/* Return */}

      <div>

        <div className="flex justify-between">

          <label>Expected Return</label>

          <span>{returnRate}%</span>

        </div>

        <Slider
          value={returnRate}
          min={6}
          max={18}
          step={0.5}
          onValueChange={setReturnRate}
        />

      </div>

{/* Results */}

<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

  <div className="space-y-5">

    {/* Future Monthly Expense */}

    <div className="flex items-center justify-between">

      <span className="text-slate-600">
        Future Monthly Expense
      </span>

      <h3 className="mt-2 text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
        {formatCurrency(result.futureMonthlyExpense)}
      </h3>

    </div>

    <div className="border-t"></div>

    {/* Retirement Corpus */}

    <div className="flex items-center justify-between">

      <span className="text-slate-600">
        Retirement Corpus
      </span>

      <h3 className="mt-2 text-sm font-bold text-green-600 sm:text-base lg:text-lg">
        {formatCurrency(result.retirementCorpus)}
      </h3>

    </div>

    <div className="border-t"></div>

    {/* Monthly SIP Required */}

    <div className="flex items-center justify-between">

      <span className="font-semibold text-slate-800">
        Monthly SIP Required
      </span>

      <h3 className="mt-2 text-sm font-bold text-blue-700 sm:text-base lg:text-lg">
        {formatCurrency(result.requiredSIP)}
      </h3>

    </div>

  </div>

</div>

      <Button className="w-full bg-green-600 hover:bg-green-700">
        Book Retirement Consultation
      </Button>

    </div>

  );

}