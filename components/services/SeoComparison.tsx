import { PricingTable } from "../ComparisonTable";

const plans = [
  { id: "standard", name: "Standard", duration: "Min. 6 Months" },
  {
    id: "professional",
    name: "Professional",
    duration: "Min. 6 Months",
  },
  {
    id: "premium",
    name: "Premium",
    duration: "Min. 6 Months",
  },
  {
    id: "premium-plus",
    name: "Premium Plus",
    duration: "Min. 6 Months",
  },
];

const analyticsIntegration = [
  { name: "Initial Analysis", included: "all" },
  { name: "Google Analytics Setup", included: "all" },
  { name: "Google Search Console Setup", included: "all" },
  { name: "Site Audit", included: "all" },
  { name: "Site Speed Test", included: "all" },
  { name: "Keywords", included: "all" },
];

const keywords = [];

// const

const SeoComparison = () => {
  return (
    <PricingTable
      analyticsIntegrationFeatures={analyticsIntegration}
      plans={plans}
      containerClassName="py-12"
      buttonClassName="bg-primary hover:bg-primary/90"
    />
  );
};

export default SeoComparison;
