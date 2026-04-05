import interactionPairsRaw from '../data/interaction_pairs.json' with { type: 'json' };
import sourceRegistryRaw from '../data/source_registry.json' with { type: 'json' };
import manifestRaw from '../data/manifest.json' with { type: 'json' };
import type { DatasetManifest, InteractionPair, SourceRegistry } from './types.js';

export const interactionPairs = interactionPairsRaw as InteractionPair[];

export const sourceRegistry = sourceRegistryRaw as SourceRegistry;

export const datasetManifest = manifestRaw as DatasetManifest;
