# How to generate types for fibjs?

## Sample

using commitish `v0.25.0` generate types for fibjs 0.25.x(with publishment version 0.25.3 on package.json)

```bash
FIBJS_VERSION=0.25.3 FIBJS_COMMIT=v0.25.0 npm run build
```

you can also use commit hash

```bash
# 98c1acd3ee3b8afb70fce0dd6502973ff74dfd12 is commit hash of tag `v0.25.0`
FIBJS_VERSION=0.25.3 \
FIBJS_COMMIT=98c1acd3ee3b8afb70fce0dd6502973ff74dfd12 \
npm run build
```