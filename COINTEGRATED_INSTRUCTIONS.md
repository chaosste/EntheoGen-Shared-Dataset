# Co-Integrated Workflow Instructions

This document defines how EntheoGen-Dataset-Only and EntheoGen co-integrate through EntheoGen-Shared-Dataset.

## Repositories

- Source repo: /Users/stephenbeale/Projects/EntheoGen-Dataset-Only
- Shared package repo: /Users/stephenbeale/Projects/EntheoGen-Shared-Dataset
- UI repo: /Users/stephenbeale/Projects/EntheoGen

## Update Flow

1. Update or curate data in EntheoGen-Dataset-Only.
2. Regenerate exports in EntheoGen-Dataset-Only.
3. In EntheoGen-Shared-Dataset, run:
   - npm run sync:dataset-only
   - npm run build
4. Commit and tag a version in EntheoGen-Shared-Dataset.
5. In EntheoGen, bump the dependency version and rebuild.

## Dependency Modes

Choose one mode and keep it consistent:

1. Private npm package
- Publish @entheogen/shared-dataset from EntheoGen-Shared-Dataset.
- In EntheoGen: npm install @entheogen/shared-dataset@<version>.

2. Git dependency
- In EntheoGen package.json:
  - "@entheogen/shared-dataset": "github:chaosste/EntheoGen-Shared-Dataset#vX.Y.Z"

3. Local file dependency for rapid local iteration
- In EntheoGen package.json:
  - "@entheogen/shared-dataset": "file:../EntheoGen-Shared-Dataset"

## Consumer Integration (EntheoGen)

Recommended import usage:

```ts
import { getInteractionPair } from '@entheogen/shared-dataset';

const pair = getInteractionPair(drugAId, drugBId);
```

Only map UI-specific view models in EntheoGen. Do not duplicate dataset logic in the UI repo.

## Contract Stability Rules

- Keep InteractionPair field names stable across minor versions.
- Additive fields are allowed in minor versions.
- Field renames/removals require a major version bump.
- manifest.json dataset_version should be used for display and diagnostics.

## Release Checklist

- sync:dataset-only completed
- TypeScript build passes
- data/manifest.json dataset_version confirmed
- CHANGELOG or release notes written
- version/tag created

## Notes

This repo intentionally excludes UI components and model inference code. It is strictly a shared dataset contract and lookup helper package.
