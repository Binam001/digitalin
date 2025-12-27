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
  {
    name: "Keywords",
    included: {
      standard: "upto 5",
      professional: "upto 10",
      premium: "upto 15",
      "premium-plus": "upto 20",
    },
  },
];

const technicalSEO = [
  { name: "Canonical URL Addition", included: "premium, premium-plus" },
  { name: "Custom 404 Page Setup", included: "premium-plus" },
  { name: "OG Tags", included: "premium-plus" },
  { name: "Page Redirection", included: "premium, premium-plus" },
  { name: "XML Sitemap", included: "all" },
  { name: "Robots.Txt", included: "all" },
  { name: "Browser Compatibility Check	", included: "all" },
  {
    name: "Page Speed Optimization",
    included: "professional, premium, premium-plus",
  },
  { name: "Broken Link Fixing", included: "premium, premium-plus" },
  { name: "Mobile Friendliness", included: "all" },
  {
    name: "Solve Keyword Cannibalization",
    included: "professional, premium, premium-plus",
  },
  {
    name: "Competitor Analysis",
    included: "premium, premium-plus",
  },
];

const onPageSEO = [
  { name: "Keyword Research", included: "all" },
  {
    name: "Meta Tag Optimization",
    included: "all",
  },
  {
    name: "Title Tag Optimization",
    included: "all",
  },
  {
    name: "Heading Tag Optimization",
    included: "all",
  },
  {
    name: "URL Optimization",
    included: "all",
  },
  {
    name: "Image Optimization",
    included: "all",
  },
  { name: "Schema Implementation", included: "premium, premium-plus" },
  {
    name: "Blog Articles",
    included: {
      standard: "2/month",
      professional: "4/month",
      premium: "6/month",
      "premium-plus": "8/month",
    },
  },
];

const offPageSEO = [
  { name: "Link Building", included: "all" },
  {
    name: "Content Marketing",
    included: "professional, premium, premium-plus",
  },
  { name: "Quora Posting", included: "professional, premium, premium-plus" },
  { name: "SReddit Posting", included: "professional, premium, premium-plus" },
  { name: "Article Submission", included: "premium, premium-plus" },
  { name: "PR Submission", included: "premium, premium-plus" },
];

const localSEO = [
  { name: "GMB Setup & Optimization", included: "all" },
  {
    name: "GMB Posting",
    included: "premium, premium-plus",
  },
  {
    name: "Google Map Creation",
    included: "professional, premium, premium-plus",
  },
  { name: "Local Citation", included: "all" },
];

const SeoComparison = () => {
  return (
    <PricingTable
      analyticsIntegrationFeatures={analyticsIntegration}
      technicalSEOFeatures={technicalSEO}
      onPageSEOFeatures={onPageSEO}
      offPageSEOFeatures={offPageSEO}
      localSEOFeatures={localSEO}
      plans={plans}
      containerClassName="py-12"
      buttonClassName="bg-primary hover:bg-primary/90"
    />
  );
};

export default SeoComparison;
