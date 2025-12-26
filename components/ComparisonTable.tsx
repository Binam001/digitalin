"use client";

import * as React from "react";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
// import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
// import NumberFlow from "@number-flow/react"

// export type PlanLevel = "starter" | "pro" | "all" | string;

export interface PricingFeature {
  name: string;
  included: string;
}

export interface PricingPlan {
  name: string;
  duration: string;
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  analyticsIntegrationFeatures: PricingFeature[];
  plans: PricingPlan[];
  containerClassName?: string;
  buttonClassName?: string;
}

export function PricingTable({
  analyticsIntegrationFeatures,
  plans,
  // onPlanSelect,
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className={cn("w-full", containerClassName)} {...props}>
        <div className="border border-foreground/30 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="divide-y divide-foreground/30">
              {/* <div className="flex"> */}
              <div className="flex justify-between items-center p-4 bg-background">
                <div className="text-sm font-medium w-[20%]">Features</div>
                <div className="flex flex-1 items-center justify-evenly text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="w-fit text-center font-medium text-primary"
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* duration */}
              <div className="flex items-center p-4">
                <div className="text-sm font-medium w-[20%]">Duration</div>
                <div className="flex flex-1 items-center justify-evenly text-sm">
                  {plans.map((plan) => (
                    <div key={plan.name} className="w-16 text-center">
                      {plan.duration}
                    </div>
                  ))}
                </div>
              </div>

              {/*  Analytics & Integration */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900">
                <div className="text-sm font-medium">
                  Analytics & Integration
                </div>
              </div>
              <div className="">
                {analyticsIntegrationFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn("flex items-center p-4 transition-colors")}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => (
                        <div
                          key={plan.name}
                          className={cn(
                            "w-16 flex items-center justify-center"
                          )}
                        >
                          {shouldShowCheck(feature.included, plan.name) ? (
                            <CheckIcon className="w-5 h-5 text-blue-500" />
                          ) : (
                            <span className="text-zinc-300 dark:text-zinc-700">
                              -
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string
): boolean {
  if (included === "all") return true;
  if (included === "pro" && (level === "pro" || level === "all")) return true;
  if (
    included === "starter" &&
    (level === "starter" || level === "pro" || level === "all")
  )
    return true;
  return false;
}
