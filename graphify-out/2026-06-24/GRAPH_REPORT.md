# Graph Report - .  (2026-06-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 17 nodes · 19 edges · 3 communities
- Extraction: 11% EXTRACTED · 89% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Technical Documentation and Standards|Technical Documentation and Standards]]
- [[_COMMUNITY_Product Development Planning|Product Development Planning]]
- [[_COMMUNITY_Product Development Planning|Product Development Planning]]

## God Nodes (most connected - your core abstractions)
1. `Technical Requirements Document v2.0` - 10 edges
2. `Product Requirements Document` - 4 edges
3. `Product Requirements Document (PRD)` - 4 edges
4. `Implementation Plan` - 3 edges
5. `Implementation Plan` - 2 edges
6. `Application Flow Document` - 2 edges
7. `Database Schema Document` - 2 edges
8. `API Contract Document` - 2 edges
9. `AI Rules` - 1 edges
10. `API Contract` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Application Flow Document` --references--> `Technical Requirements Document v2.0`  [INFERRED]
  docs/3_APP_FLOW.md → docs/TRD_v2.md
- `AI Rules` --conceptually_related_to--> `Technical Requirements Document v2.0`  [INFERRED]
  docs/AI_RULES.md → docs/TRD_v2.md
- `Technical Requirements Document v2.0` --references--> `Product Requirements Document`  [INFERRED]
  docs/TRD_v2.md → docs/PRD.md
- `Database Schema Document` --references--> `Technical Requirements Document v2.0`  [INFERRED]
  docs/5_SCHEMA.md → docs/TRD_v2.md
- `API Contract Document` --references--> `Technical Requirements Document v2.0`  [INFERRED]
  docs/6_API_CONTRACT.md → docs/TRD_v2.md

## Import Cycles
- None detected.

## Communities (3 total, 0 thin omitted)

### Community 0 - "Technical Documentation and Standards"
Cohesion: 0.33
Nodes (7): Database Schema Document, API Contract Document, AI Development Rules, AI Rules, API Contract, Database Schema, Technical Requirements Document v2.0

### Community 1 - "Product Development Planning"
Cohesion: 0.40
Nodes (5): Product Requirements Document (PRD), Application Flow Document, Design System & UI/UX Specification, Implementation Plan, Portfolio Development Tracker

### Community 2 - "Product Development Planning"
Cohesion: 0.40
Nodes (5): Application Flow, Design System & UI/UX Specification, Implementation Plan, Product Requirements Document, Portfolio Development Tracker

## Knowledge Gaps
- **9 isolated node(s):** `AI Rules`, `API Contract`, `Application Flow`, `Design System & UI/UX Specification`, `Database Schema` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Technical Requirements Document v2.0` connect `Technical Documentation and Standards` to `Product Development Planning`, `Product Development Planning`?**
  _High betweenness centrality (0.833) - this node is a cross-community bridge._
- **Why does `Product Requirements Document` connect `Product Development Planning` to `Technical Documentation and Standards`?**
  _High betweenness centrality (0.442) - this node is a cross-community bridge._
- **Why does `Product Requirements Document (PRD)` connect `Product Development Planning` to `Technical Documentation and Standards`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `Technical Requirements Document v2.0` (e.g. with `Application Flow Document` and `Database Schema Document`) actually correct?**
  _`Technical Requirements Document v2.0` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Product Requirements Document` (e.g. with `Application Flow` and `Design System & UI/UX Specification`) actually correct?**
  _`Product Requirements Document` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Product Requirements Document (PRD)` (e.g. with `Application Flow Document` and `Design System & UI/UX Specification`) actually correct?**
  _`Product Requirements Document (PRD)` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Implementation Plan` (e.g. with `Product Requirements Document (PRD)` and `Technical Requirements Document v2.0`) actually correct?**
  _`Implementation Plan` has 3 INFERRED edges - model-reasoned connections that need verification._