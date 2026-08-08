export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateSIP(
  monthlyInvestment: number,
  years: number,
  annualReturn: number
) {
  monthlyInvestment = Number(monthlyInvestment);
  years = Number(years);
  annualReturn = Number(annualReturn);

  if (
    isNaN(monthlyInvestment) ||
    isNaN(years) ||
    isNaN(annualReturn)
  ) {
    return {
      investedAmount: 0,
      estimatedReturns: 0,
      futureValue: 0,
    };
  }

  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));

  const investedAmount = monthlyInvestment * months;

  const estimatedReturns = futureValue - investedAmount;

  return {
    investedAmount,
    estimatedReturns,
    futureValue,
  };
}

export function calculateRetirement(
  currentAge: number,
  retirementAge: number,
  monthlyExpense: number,
  inflation: number,
  returnRate: number
) {
  const yearsLeft = retirementAge - currentAge;

  const futureMonthlyExpense =
    monthlyExpense * Math.pow(1 + inflation / 100, yearsLeft);

  const annualExpense = futureMonthlyExpense * 12;

  // Corpus assuming 4% safe withdrawal
  const retirementCorpus = annualExpense * 25;

  const monthlyRate = returnRate / 12 / 100;
  const months = yearsLeft * 12;

  const sip =
    retirementCorpus /
    ((((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate)));

  return {
    futureMonthlyExpense,
    retirementCorpus,
    requiredSIP: sip,
  };
}

export function calculateEMI(
  loanAmount: number,
  annualInterestRate: number,
  tenureYears: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = tenureYears * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return {
    emi,
    totalInterest,
    totalPayment,
  };
}

export function calculateInsurance(
  annualIncome: number,
  currentAge: number,
  dependents: number,
  existingCover: number
) {
  // Human Life Value (simple version)

  const incomeMultiplier =
    currentAge <= 35
      ? 20
      : currentAge <= 45
      ? 15
      : currentAge <= 55
      ? 10
      : 7;

  const recommendedCover =
    annualIncome * incomeMultiplier +
    dependents * 1000000;

  const additionalCover = Math.max(
    recommendedCover - existingCover,
    0
  );

  return {
    recommendedCover,
    existingCover,
    additionalCover,
  };
}