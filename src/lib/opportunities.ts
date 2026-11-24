import type { Opportunity } from "./types";

export function isOpportunityOpen(opportunity: Opportunity): boolean {
  if (opportunity.status !== "open") return false;

  const deadline = Date.parse(opportunity.deadline);
  if (Number.isNaN(deadline)) return true;

  const deadlineDay = new Date(deadline).toISOString().slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);
  return deadlineDay >= today;
}
