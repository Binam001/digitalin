"use client";

import * as React from "react";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
// import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
// import NumberFlow from "@number-flow/react"

// export type PlanLevel = "starter" | "pro" | "all" | string;

export interface PricingFeature {
  name: string;
  included: string | { [planId: string]: string | boolean };
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  analyticsIntegrationFeatures: PricingFeature[];
  technicalSEOFeatures: PricingFeature[];
  onPageSEOFeatures: PricingFeature[];
  offPageSEOFeatures: PricingFeature[];
  localSEOFeatures: PricingFeature[];
  plans: PricingPlan[];
  containerClassName?: string;
  buttonClassName?: string;
}

export function PricingTable({
  analyticsIntegrationFeatures,
  technicalSEOFeatures,
  onPageSEOFeatures,
  offPageSEOFeatures,
  localSEOFeatures,
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
        "py-8 lg:py-16",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <h1 className="text-5xl text-primary font-[Poppins-ExtraBold] uppercase text-center">
        SEO Package
      </h1>
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
              <div className="p-4 bg-foreground/5">
                <div className="text-sm font-medium">
                  Analytics & Integration
                </div>
              </div>
              <div className="">
                {analyticsIntegrationFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-colors border border-foreground/5"
                    )}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => {
                        let cellContent: React.ReactNode;

                        if (typeof feature.included === "object") {
                          const value = feature.included[plan.id];
                          if (typeof value === "string") {
                            cellContent = <span>{value}</span>;
                          } else if (value === true) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        } else {
                          // Fallback to original logic
                          if (shouldShowCheck(feature.included, plan.id)) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        }

                        return (
                          <div
                            key={plan.id}
                            className={cn(
                              "w-16 flex items-center justify-center"
                            )}
                          >
                            {cellContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical SEO */}
              <div className="p-4 bg-foreground/5">
                <div className="text-sm font-medium">Tecnhical SEO</div>
              </div>
              <div className="">
                {technicalSEOFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-colorss border border-foreground/5"
                    )}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => {
                        let cellContent: React.ReactNode;

                        if (typeof feature.included === "object") {
                          const value = feature.included[plan.id];
                          if (typeof value === "string") {
                            cellContent = <span>{value}</span>;
                          } else if (value === true) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        } else {
                          // Fallback to original logic
                          if (shouldShowCheck(feature.included, plan.id)) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        }

                        return (
                          <div
                            key={plan.id}
                            className={cn(
                              "w-16 flex items-center justify-center"
                            )}
                          >
                            {cellContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/*  On Page SEO */}
              <div className="p-4 bg-foreground/5">
                <div className="text-sm font-medium">On Page SEO</div>
              </div>
              <div className="">
                {onPageSEOFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-colors border border-foreground/5"
                    )}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => {
                        let cellContent: React.ReactNode;

                        if (typeof feature.included === "object") {
                          const value = feature.included[plan.id];
                          if (typeof value === "string") {
                            cellContent = <span>{value}</span>;
                          } else if (value === true) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        } else {
                          // Fallback to original logic
                          if (shouldShowCheck(feature.included, plan.id)) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        }

                        return (
                          <div
                            key={plan.id}
                            className={cn(
                              "w-16 flex items-center justify-center"
                            )}
                          >
                            {cellContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/*  Off Page SEO */}
              <div className="p-4 bg-foreground/5">
                <div className="text-sm font-medium">Off Page SEO</div>
              </div>
              <div className="">
                {offPageSEOFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-colors border border-foreground/5"
                    )}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => {
                        let cellContent: React.ReactNode;

                        if (typeof feature.included === "object") {
                          const value = feature.included[plan.id];
                          if (typeof value === "string") {
                            cellContent = <span>{value}</span>;
                          } else if (value === true) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        } else {
                          // Fallback to original logic
                          if (shouldShowCheck(feature.included, plan.id)) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        }

                        return (
                          <div
                            key={plan.id}
                            className={cn(
                              "w-16 flex items-center justify-center"
                            )}
                          >
                            {cellContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/*  Local SEO */}
              <div className="p-4 bg-foreground/5">
                <div className="text-sm font-medium">Local SEO</div>
              </div>
              <div className="">
                {localSEOFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-colors border border-foreground/5"
                    )}
                  >
                    <div className="text-sm w-[20%]">{feature.name}</div>
                    <div className="flex flex-1 items-center justify-evenly text-sm">
                      {plans.map((plan) => {
                        let cellContent: React.ReactNode;

                        if (typeof feature.included === "object") {
                          const value = feature.included[plan.id];
                          if (typeof value === "string") {
                            cellContent = <span>{value}</span>;
                          } else if (value === true) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        } else {
                          // Fallback to original logic
                          if (shouldShowCheck(feature.included, plan.id)) {
                            cellContent = (
                              <CheckIcon className="w-5 h-5 text-blue-500" />
                            );
                          } else {
                            cellContent = (
                              <span className="text-zinc-300 dark:text-zinc-700">
                                -
                              </span>
                            );
                          }
                        }

                        return (
                          <div
                            key={plan.id}
                            className={cn(
                              "w-16 flex items-center justify-center"
                            )}
                          >
                            {cellContent}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* button */}
              <div className="flex justify-between items-center p-4 bg-background">
                <div className="text-sm font-medium w-[20%]"></div>
                <div className="flex flex-1 items-center justify-evenly text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="w-fit text-center font-medium text-primary"
                    >
                      <InteractiveHoverButton text="Request a Quote" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function shouldShowCheck(included: string, planId: string): boolean {
  if (included === "all") {
    return true;
  }
  const includedPlans = included.split(",").map((p) => p.trim());
  return includedPlans.includes(planId);
}
