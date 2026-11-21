# Visual identity and source attribution

## Context

The site presents Victor Aragão as a dentist and microbiology researcher. Its visual system connects oral biofilm research to a live network of colonies, a VA ligature in a plate, and a streak-plate divider. The abstract post cover uses a slug-derived seed so server and client rendering agree.

## Decision

Use teal for viable colonies and crimson for stained colonies, keep the canvas responsive to motion preferences, and generate cover geometry deterministically from the slug. The CSS font stack retains fallback faces when `next/font` does not load.

## Consequences

Preserve the brand meanings, the stable cover seed, and reduced-motion behavior during design changes. The `Biofilm` particle algorithm records an adaptation from Meng To's ThreeUI work under the MIT license; its source attribution remains in the code as a fixed legal exception to the comment ratchet. Upstream: https://github.com/MengTo/threeui and https://github.com/MengTo/threeui/blob/main/LICENSE.
