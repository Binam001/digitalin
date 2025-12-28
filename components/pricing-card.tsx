"use client";
import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming a utility function for class merging
// import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
// --- 1. Typescript Interfaces (API) ---

type PackageCycle = "Social Media Package" | "Influence Package" | "Ad Package";

interface Feature {
  name: string;
  isIncluded: boolean;
  tooltip?: string;
}

interface PriceTier {
  id: string;
  name: string;
  description?: string;
  price?: number;
  // isPopular: boolean;
  title1?: string;
  title1Features?: { name: string }[];
  title2?: string;
  title2Features?: Feature[];
  title3?: string;
  title3Features?: Feature[];
  title4?: string;
  title4Features?: Feature[];
  features?: Feature[];
}

interface PricingComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The list of pricing tiers to display. */
  plans: PriceTier[];
  /** The currently selected billing cycle. */
  packageCycle: PackageCycle;
  /** Callback function when the user changes the billing cycle. */
  onCycleChange: (cycle: PackageCycle) => void;
  /** Callback function when a user selects a plan. */
  onPlanSelect: (planId: string, cycle: PackageCycle) => void;
}

// --- 2. Utility Components ---

/** Renders a single feature row with an icon. */
const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.isIncluded ? Check : X;
  const iconColor = feature.isIncluded
    ? "text-primary"
    : "text-muted-foreground";

  return (
    <li className="flex items-start space-x-3 py-2">
      <Icon
        className={cn("h-4 w-4 flex-shrink-0 mt-0.5", iconColor)}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-sm",
          feature.isIncluded ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {feature.name}
      </span>
    </li>
  );
};

// --- 3. Main Component: PricingComponent ---

const PricingComponent: React.FC<PricingComponentProps> = ({
  plans,
  packageCycle,
  onCycleChange,
  onPlanSelect,
  className,
  ...props
}) => {
  const annualDiscountPercent = 20; // Example: 20% discount for annual billing

  // --- 3.1. Billing Toggle ---
  const CycleToggle = (
    <div className="flex justify-center mb-10 mt-2">
      <ToggleGroup
        type="single"
        value={packageCycle}
        onValueChange={(value) => {
          if (
            value &&
            (value === "Social Media Package" ||
              value === "Influence Package" ||
              value === "Ad Package")
          ) {
            onCycleChange(value);
          }
        }}
        aria-label="Select billing cycle"
        className="border border-foreground/30 rounded-lg p-1 bg-background/50 space-x-4"
      >
        <ToggleGroupItem
          value="Social Media Package"
          aria-label="Social Media Package"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-foreground data-[state=on]:shadow-sm data-rounded-md transition-colors relative hover:bg-primary/70 hover:text-foreground/70"
        >
          Social Media Package
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Influence Package"
          aria-label="Influence Package"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-foreground data-[state=on]:shadow-sm data-rounded-md transition-colors relative hover:bg-primary/70 hover:text-foreground/70"
        >
          Influence Package
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Ad Package"
          aria-label="Ad Package"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-foreground data-[state=on]:shadow-sm data-rounded-md transition-colors relative hover:bg-primary/70 hover:text-foreground/70"
        >
          Ad Package
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );

  // --- 3.2. Pricing Cards & Comparison Table Data ---

  // Extract all unique feature names across all plans for the comparison table header
  const allFeatures = Array.from(
    new Set(plans.flatMap((p) => (p.features || []).map((f) => f.name)))
  );

  // Render the list of pricing cards
  const PricingCards = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plans.map((plan, index) => {
        const currentPrice = plan.price;

        return (
          <Card
            key={plan.id}
            className={cn(
              "flex flex-col transition-all duration-300 shadow-md hover:shadow-lg bg-background border-foreground/30 hover:scale-[1.02]"
            )}
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-primary">
                  {plan.name}
                </CardTitle>
              </div>
              <CardDescription className="text-sm mt-1">
                {plan.description}
              </CardDescription>
              {currentPrice && (
                <div className="mt-4">
                  <p className="text-4xl font-extrabold text-foreground">
                    ${currentPrice}
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              {plan.title1 || plan.title2 || plan.title3 ? (
                <>
                  {plan.title1 && plan.title1Features && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary/80">
                        {plan.title1}
                      </h4>
                      <ul className="list-none space-y-0">
                        {plan.title1Features.map((feature) => (
                          <li
                            key={feature.name}
                            className="flex items-start space-x-3 py-2"
                          >
                            <span className="text-sm text-foreground">
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {plan.title2 && plan.title2Features && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary/80">
                        {plan.title2}
                      </h4>
                      <ul className="list-none space-y-0">
                        {plan.title2Features.map((feature) => (
                          <FeatureItem key={feature.name} feature={feature} />
                        ))}
                      </ul>
                    </div>
                  )}
                  {plan.title3 && plan.title3Features && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary/80">
                        {plan.title3}
                      </h4>
                      <ul className="list-none space-y-0">
                        {plan.title3Features.map((feature) => (
                          <FeatureItem key={feature.name} feature={feature} />
                        ))}
                      </ul>
                    </div>
                  )}
                  {plan.title4 && plan.title4Features && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary/80">
                        {plan.title4}
                      </h4>
                      <ul className="list-none space-y-0">
                        {plan.title4Features.map((feature) => (
                          <FeatureItem key={feature.name} feature={feature} />
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h4 className="text-sm font-semibold mb-2 mt-4 text-foreground/80">
                    Key Features:
                  </h4>
                  <ul className="list-none space-y-0">
                    {(plan.features || []).slice(0, 5).map((feature) => (
                      <FeatureItem key={feature.name} feature={feature} />
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <InteractiveHoverButton
                text="Request a Quote"
                className="text-foreground"
              />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );

  // --- 3.3. Comparison Table (Mobile hidden, Tablet/Desktop visible) ---
  // const ComparisonTable = (
  //   <div className="mt-16 hidden md:block border rounded-lg overflow-x-auto shadow-sm dark:border-border/50">
  //     <table className="min-w-full divide-y divide-border/80 dark:divide-border/50">
  //       <thead>
  //         <tr className="bg-muted/30 dark:bg-muted/20">
  //           <th
  //             scope="col"
  //             className="px-6 py-4 text-left text-sm font-semibold text-foreground/80 w-[200px] whitespace-nowrap"
  //           >
  //             Feature
  //           </th>
  //           {plans.map((plan) => (
  //             <th
  //               key={`th-${plan.id}`}
  //               scope="col"
  //               className={cn(
  //                 "px-6 py-4 text-center text-sm font-semibold text-foreground/80 whitespace-nowrap"
  //                 // plan.isPopular && "bg-primary/10 dark:bg-primary/20"
  //               )}
  //             >
  //               {plan.name}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className="divide-y divide-border/80 dark:divide-border/50 bg-background/90">
  //         {allFeatures.map((featureName, index) => (
  //           <tr
  //             key={featureName}
  //             className={cn(
  //               "transition-colors hover:bg-accent/20 dark:hover:bg-accent/10",
  //               index % 2 === 0
  //                 ? "bg-background"
  //                 : "bg-muted/10 dark:bg-muted/5"
  //             )}
  //           >
  //             <td className="px-6 py-3 text-left text-sm font-medium text-foreground/90 whitespace-nowrap">
  //               {featureName}
  //             </td>
  //             {plans.map((plan) => {
  //               const feature = (plan.features || []).find(
  //                 (f) => f.name === featureName
  //               );
  //               const isIncluded = feature?.isIncluded ?? false;
  //               const Icon = isIncluded ? Check : X;
  //               const iconColor = isIncluded
  //                 ? "text-primary"
  //                 : "text-muted-foreground/70";

  //               return (
  //                 <td
  //                   key={`${plan.id}-${featureName}`}
  //                   className={cn(
  //                     "px-6 py-3 text-center transition-all duration-150"
  //                   )}
  //                 >
  //                   <Icon
  //                     className={cn("h-5 w-5 mx-auto", iconColor)}
  //                     aria-hidden="true"
  //                   />
  //                 </td>
  //               );
  //             })}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  // --- 3.4. Final Render ---
  return (
    <div
      className={cn("w-full py-12 md:py-20 px-4 md:px-8 lg:px-16", className)}
      {...props}
    >
      <header className="w-full flex justify-center mb-8">
        <h1 className="text-5xl font-[Poppins-ExtraBold] uppercase">
          Pick Your Growth Package
        </h1>
      </header>

      {CycleToggle}

      {/* Pricing Cards (Mobile-first layout) */}
      <section aria-labelledby="pricing-plans" className="px-0">
        {PricingCards}
      </section>

      {/* Comparison Table (Desktop/Tablet visibility) */}
      {/* <section aria-label="Feature Comparison Table" className="mt-16">
        <h3 className="text-2xl font-bold mb-6 hidden md:block text-center text-foreground">
          Detailed Feature Comparison
        </h3>
        {ComparisonTable}
      </section> */}
    </div>
  );
};

const socialMediaPackagePlans: PriceTier[] = [
  {
    id: "standard",
    name: "Standard",
    features: [
      { name: "Platforms: Facebook, Instagram", isIncluded: true },
      { name: "4 Static Posts", isIncluded: true },
      { name: "2 GIF/Video Posts", isIncluded: true },
      { name: "Profile/ Cover Image", isIncluded: true },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    // description: "Everything a growing business needs to succeed.",
    // price: 49,
    features: [
      { name: "Platforms: Facebook, Instagram", isIncluded: true },
      { name: "8 Static Posts", isIncluded: true },
      { name: "4 GIF/Video Posts", isIncluded: true },
      { name: "Profile/ Cover Image", isIncluded: true },
      { name: "Planning & Strategy", isIncluded: true },
      { name: "Content Calender", isIncluded: true },
      { name: "Festive Posts (Upto 2)", isIncluded: true },
      { name: "Monthly Reporting", isIncluded: true },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    // description:
    //   "Advanced features and dedicated support for large organizations.",
    // price: 199,
    features: [
      {
        name: "Platforms: Facebook, Instagram (+1 social media platform)",
        isIncluded: true,
      },
      { name: "10 Static Posts", isIncluded: true },
      { name: "6 GIF/Video Posts", isIncluded: true },
      { name: "Profile/ Cover Image", isIncluded: true },
      { name: "Planning & Strategy", isIncluded: true },
      { name: "Content Calender", isIncluded: true },
      { name: "Festive Posts (Upto 2)", isIncluded: true },
      { name: "Monthly Reporting", isIncluded: true },
      { name: "Monthly Competitor Analysis", isIncluded: true },
    ],
  },
  {
    id: "premium-pro",
    name: "Premium-Pro",
    // description:
    //   "Advanced features and dedicated support for large organizations.",
    // price: 199,
    features: [
      {
        name: "Platforms: Facebook, Instagram, Youtube Channel (+1 social media platform)",
        isIncluded: true,
      },
      { name: "12 Static Posts", isIncluded: true },
      { name: "10 GIF/Video Posts", isIncluded: true },
      { name: "Profile/ Cover Image", isIncluded: true },
      { name: "Planning & Strategy", isIncluded: true },
      { name: "Content Calender", isIncluded: true },
      { name: "Festive Posts (Upto 4)", isIncluded: true },
      { name: "Monthly Reporting", isIncluded: true },
      { name: "Monthly Competitor Analysis", isIncluded: true },
    ],
  },
];

const influencerPackagePlans: PriceTier[] = [
  {
    id: "nano-reach",
    name: "Nano Reach",
    // description: "Perfect for new teams and small projects.",
    // price: 182,
    features: [
      { name: "10 Nano Influencers (1k-10k followers each)", isIncluded: true },
      {
        name: "Focus on high engagement with niche audiences, primarily through picture content with some video content",
        isIncluded: true,
      },
    ],
  },
  {
    id: "micro-impact",
    name: "Micro Impact",
    features: [
      {
        name: "10 Micro Influencers (10k-50k followers each)",
        isIncluded: true,
      },
      {
        name: "Offers a significant reach and engagement through both picture and video content, targeting specific market segments.",
        isIncluded: true,
      },
    ],
  },
  {
    id: "micro-boost",
    name: "Micro Boost",
    features: [
      { name: "10 Nano Influencers (1k-10k followers each)", isIncluded: true },
      {
        name: "10 Micro Influencers (10k-50k followers each)",
        isIncluded: true,
      },
      {
        name: "Combines the engagement of nano influencers and the reach of micro influencers, with a balance of picture and video content.",
        isIncluded: true,
      },
    ],
  },
  {
    id: "macro-power",
    name: "Macro Power",
    features: [
      {
        name: "10 Macro Influencers (50k-500k followers each)",
        isIncluded: true,
      },
      {
        name: "Delivers broad reach with substantial influence across larger audiences, utilizing both picture and video content.",
        isIncluded: true,
      },
    ],
  },
  {
    id: "elite-expansion",
    name: "Elite Expansion",
    features: [
      {
        name: "15 Micro Influencers (10k-50k followers each)",
        isIncluded: true,
      },
      {
        name: "5 Macro Influencers (50k-500k followers each)",
        isIncluded: true,
      },
      {
        name: "Balances substantial reach and deep engagement, leveraging a mix of picture and video content for maximum impact.",
        isIncluded: true,
      },
    ],
  },
];

const adPackagePlans: PriceTier[] = [
  {
    id: "basic-plan",
    name: "Basic Plan",
    // description: "For businesses looking to get started with paid advertising.",
    // price: 100,
    title1: "Platforms",
    title1Features: [{ name: "Facebook, Instagram" }],
    title2: "Features",
    title2Features: [
      {
        name: "1 Facebook/Instagram Static Post Design",
        isIncluded: true,
      },
      {
        name: "1 Facebook/Instagram GIF Post Design",
        isIncluded: true,
      },
      {
        name: "Monthly analysis report",
        isIncluded: true,
      },
    ],
    title3: "Achievable Results/ Month",
    title3Features: [
      { name: "Facebook + Instagram Impression: upto 2.5M", isIncluded: true },
      {
        name: "Facebook + Instagram Engagement/ ThruPlays: upto 120K",
        isIncluded: true,
      },
      { name: "Facebook Followers Growth: upto 800", isIncluded: true },
    ],
  },
  {
    id: "engagement-boost",
    name: "Engagement Boost",
    title1: "Platforms",
    title1Features: [{ name: "Facebook, Instagram" }],
    title2: "Features",
    title2Features: [
      {
        name: "1 Facebook/Instagram Static Post Design",
        isIncluded: true,
      },
      {
        name: "2 Facebook/Instagram GIF Post Design",
        isIncluded: true,
      },
      {
        name: "5 Facebook/Instagram Ad Campaigns",
        isIncluded: true,
      },
      {
        name: "Monthly analysis report with detailed insights",
        isIncluded: true,
      },
    ],
    title3: "Achievable Results/ Month",
    title3Features: [
      { name: "Facebook + Instagram Impression: upto 5M", isIncluded: true },
      {
        name: "Facebook + Instagram Engagement/ ThruPlays: upto 240K",
        isIncluded: true,
      },
      { name: "Facebook Followers Growth: upto 1.6K", isIncluded: true },
    ],
  },
  {
    id: "multi-channel-growth",
    name: "Multi-Channel Growth",
    title1: "Platforms",
    title1Features: [
      { name: "Facebook, Instagram, YouTube, Google Display Ads" },
    ],
    title2: "Features",
    title2Features: [
      {
        name: "1 Facebook/Instagram Static Post Design",
        isIncluded: true,
      },
      {
        name: "2 Facebook/Instagram GIF Post Design",
        isIncluded: true,
      },
      {
        name: "7 Google Display GIF Design",
        isIncluded: true,
      },
      {
        name: "Monthly analysis report with detailed insights",
        isIncluded: true,
      },
      {
        name: "Audience targeting strategy",
        isIncluded: true,
      },
    ],
    title3: "Achievable Results/ Month",
    title3Features: [
      { name: "Facebook + Instagram Impression: upto 5M", isIncluded: true },
      {
        name: "Facebook + Instagram Engagement/ ThruPlays: upto 240K",
        isIncluded: true,
      },
      { name: "Facebook Followers Growth: upto 1.6K", isIncluded: true },
      { name: "YouTube Video Views: upto 200K", isIncluded: true },
      { name: "Display Ad Impression: upto 3.3M", isIncluded: true },
    ],
  },
  {
    id: "ultimate-reach",
    name: "Ultimate Reach",
    title1: "Platforms",
    title1Features: [
      { name: "Facebook, Instagram, YouTube, Google Display Ads" },
    ],
    title2: "Ad Spend",
    title2Features: [{ name: "Upto $5000/month", isIncluded: true }],
    title3: "Features",
    title3Features: [
      {
        name: "2 Facebook/Instagram Static Post Design",
        isIncluded: true,
      },
      {
        name: "2 Facebook/Instagram GIF Post Design",
        isIncluded: true,
      },
      {
        name: "Monthly analysis report with detailed insights",
        isIncluded: true,
      },
      {
        name: "Audience targeting strategy",
        isIncluded: true,
      },
    ],
    title4: "Achievable Results/ Month",
    title4Features: [
      { name: "Facebook + Instagram Impression: upto 14.5M", isIncluded: true },
      {
        name: "Facebook + Instagram Engagement/ ThruPlays: upto 700K",
        isIncluded: true,
      },
      { name: "Facebook Followers Growth: upto 3.5K", isIncluded: true },
      { name: "YouTube Video Views: upto 6400K", isIncluded: true },
      { name: "Display Ad Impression: upto 5M", isIncluded: true },
    ],
  },
];

// Example React Component Usage
const ExampleComp = () => {
  const [cycle, setCycle] = React.useState<PackageCycle>(
    "Social Media Package"
  );

  const handleCycleChange = (newCycle: PackageCycle) => {
    setCycle(newCycle);
    console.log(`Billing cycle changed to: ${newCycle}`);
  };

  const handlePlanSelect = (planId: string, currentCycle: PackageCycle) => {
    console.log(`User selected plan: ${planId} with cycle: ${currentCycle}`);
    // Navigation or API call logic would go here
  };

  const plansToDisplay =
    cycle === "Social Media Package"
      ? socialMediaPackagePlans
      : cycle === "Influence Package"
      ? influencerPackagePlans
      : adPackagePlans;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PricingComponent
        plans={plansToDisplay}
        packageCycle={cycle}
        onCycleChange={handleCycleChange}
        onPlanSelect={handlePlanSelect}
      />
    </div>
  );
};

export default ExampleComp;
