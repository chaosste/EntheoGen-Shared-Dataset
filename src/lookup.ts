import { interactionPairs } from './loaders.js';
import type { InteractionPair } from './types.js';

const pairKey = (a: string, b: string): string => [a, b].sort().join('|');

const interactionIndex = new Map<string, InteractionPair>(
  interactionPairs.map((pair) => [pair.pair_key, pair])
);

export function getInteractionPair(substanceAId: string, substanceBId: string): InteractionPair | null {
  return interactionIndex.get(pairKey(substanceAId, substanceBId)) ?? null;
}

export function hasInteractionPair(substanceAId: string, substanceBId: string): boolean {
  return interactionIndex.has(pairKey(substanceAId, substanceBId));
}

export function getInteractionIndex(): ReadonlyMap<string, InteractionPair> {
  return interactionIndex;
}

export function getKnownSubstanceIds(): string[] {
  const ids = new Set<string>();
  for (const pair of interactionPairs) {
    ids.add(pair.substance_a_id);
    ids.add(pair.substance_b_id);
  }
  return Array.from(ids).sort();
}
