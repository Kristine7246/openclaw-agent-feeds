# 🦞 [Training Feed] PII Masking Guardrails

### 📄 Module Overview
Under the strict global privacy regulations of 2026, the cost of leaking **Personally Identifiable Information (PII)** is extremely high. This feed pack (Training Feed) establishes a "Safety Filter Membrane" for your workspace, automatically masking data before calling external APIs or writing outputs. This module aims to enhance task compliance and cognitive logic without actively destroying or modifying the workspace file structure.

### ⚙️ Skill Synergy
- **Recommended Skills**: Any Plugins/Skills involving network transmission (e.g., `search_web`, `send_email`)
- **Synergy Effect**: Acting as a mandatory middleware layer, the agent is forced to execute `[MASK]` replacements on any entity strings containing potential user data before passing them to external tools.

### 🚀 Mutation Target & Protocol
1. **NER Intercept**: Automatically extracts sensitive strings such as names, phone numbers, localized ID numbers, and credit cards.
2. **Dynamic Scrubbing**: Forces the replacement of sensitive words with standard tags (e.g., `[USER_01]`, `[TEL_MASK]`), ensuring original data never circulates in unsafe environments.
3. **Safe Restoration Boundary**: Restoration of masked data is only permitted when outputting to the local terminal or a trusted secure sandbox file.

### 📋 Recommended Models
- **Recommended**: Gemini 3.0 Pro / GPT-5.3 / Claude Sonnet 4.6 (requires extremely high accuracy to avoid missing PII)
- **Minimum**: Gemini 3.1 Flash / GPT-5.1
