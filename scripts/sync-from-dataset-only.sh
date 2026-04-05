#!/usr/bin/env bash
set -euo pipefail

SOURCE_REPO="${SOURCE_REPO:-/Users/stephenbeale/Projects/EntheoGen-Dataset-Only}"
TARGET_REPO="$(cd "$(dirname "$0")/.." && pwd)"

cp "$SOURCE_REPO/src/exports/interaction_pairs.json" "$TARGET_REPO/data/interaction_pairs.json"
cp "$SOURCE_REPO/src/exports/source_registry.json" "$TARGET_REPO/data/source_registry.json"
cp "$SOURCE_REPO/src/exports/manifest.json" "$TARGET_REPO/data/manifest.json"

echo "Synced dataset artifacts from $SOURCE_REPO to $TARGET_REPO/data"
