"use client";

import { useMemo, useState } from "react";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import {
  calculateInsurance,
  formatCurrency,
} from "@/lib/calculators";

export default function InsuranceCalculator() {

  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [age, setAge] = useState(30);
  const [dependents, setDependents] = useState(2);
  const [existingCover, setExistingCover] = useState(5000000);

  const result = useMemo(() => {

    return calculateInsurance(
      annualIncome,
      age,
      dependents,
      existingCover
    );

  }, [
    annualIncome,
    age,
    dependents,
    existingCover,
  ]);

  return (

    <div className="space-y-8">

      {/* Annual Income */}

      <div>

        <div className="flex justify-between">

          <label>Annual Income</label>

          <span>{formatCurrency(annualIncome)}</span>

        </div>

   <Slider
  value={annualIncome}
  min={300000}
  max={10000000}
  step={100000}
  onValueChange={(value) => {
    if (typeof value === "number") {
      setAnnualIncome(value);
    }
  }}
/>

      </div>

      {/* Age */}

      <div>

        <div className="flex justify-between">

          <label>Current Age</label>

          <span>{age} Years</span>

        </div>

<Slider
  value={age}
  min={20}
  max={65}
  onValueChange={(value) => {
    if (typeof value === "number") {
      setAge(value);
    }
  }}
/>

      </div>

      {/* Dependents */}

      <div>

        <div className="flex justify-between">

          <label>Dependents</label>

          <span>{dependents}</span>

        </div>

<Slider
  value={dependents}
  min={0}
  max={6}
  onValueChange={(value) => {
    if (typeof value === "number") {
      setDependents(value);
    }
  }}
/>

      </div>

      {/* Existing Cover */}

      <div>

        <div className="flex justify-between">

          <label>Existing Cover</label>

          <span>{formatCurrency(existingCover)}</span>

        </div>

<Slider
  value={existingCover}
  min={0}
  max={30000000}
  step={500000}
  onValueChange={(value) => {
    if (typeof value === "number") {
      setExistingCover(value);
    }
  }}
/>

      </div>

      {/* Results */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

        <div className="space-y-5">

          <div className="flex items-center justify-between">

            <span className="text-slate-600">
              Recommended Cover
            </span>

            <h3 className="text-sm font-bold text-green-600 sm:text-base lg:text-lg">
              {formatCurrency(result.recommendedCover)}
            </h3>

          </div>

          <div className="border-t"></div>

          <div className="flex items-center justify-between">

            <span className="text-slate-600">
              Existing Cover
            </span>

            <h3 className="text-sm font-bold sm:text-base lg:text-lg">
              {formatCurrency(result.existingCover)}
            </h3>

          </div>

          <div className="border-t"></div>

          <div className="flex items-center justify-between">

            <span className="font-semibold text-slate-800">
              Additional Cover Needed
            </span>

            <h3 className="text-sm font-bold text-blue-700 sm:text-base lg:text-lg">
              {formatCurrency(result.additionalCover)}
            </h3>

          </div>

        </div>

      </div>

      <Button className="w-full bg-green-600 hover:bg-green-700">
        Talk to an Insurance Advisor
      </Button>

    </div>

  );
}