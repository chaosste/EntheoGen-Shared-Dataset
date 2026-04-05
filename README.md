# EntheoGen Shared Dataset

Shared, versioned dataset package for EntheoGen projects.

## Purpose

This repository is the middle layer between:
- EntheoGen-Dataset-Only (source of truth, export generator)
- EntheoGen UI app (consumer)

It exposes a stable, typed interface so UI updates do not require copying raw dataset internals.

## Folder Structure

```text
EntheoGen-Shared-Dataset/
  data/
    interaction_pairs.json
    source_registry.json
    manifest.json
  src/
    index.ts
    loaders.ts
    lookup.ts
    types.ts
  scripts/
    sync-from-dataset-only.sh
  COINTEGRATED_INSTRUCTIONS.md
  package.json
  tsconfig.json
```

## Minimal Interface

Exports from src/index.ts:
- datasetManifest
- interactionPairs
- sourceRegistry
- getInteractionPair(substanceAId, substanceBId)
- hasInteractionPair(substanceAId, substanceBId)
- getInteractionIndex()
- getKnownSubstanceIds()
- Types: InteractionPair, RuleOrigin, InteractionCode, SourceRegistry, DatasetManifest

## Build

```bash
npm install
npm run build
```

## Refresh Data From Dataset-Only

```bash
npm run sync:dataset-only
npm run build
```

This copies canonical export artifacts from EntheoGen-Dataset-Only into data/.
