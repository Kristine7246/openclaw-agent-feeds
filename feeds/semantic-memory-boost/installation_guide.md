# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：semantic_memory_boost
- 請重構為可重用的 OpenClaw skill
- 需包含：
  - Title
  - Purpose
  - When to use
  - Required inputs
  - Workflow
  - Constraints
  - Output format
  - Self-check checklist
  - Failure modes

規則：
- 不要原樣照抄
- 要補足缺失的執行流程與驗證邏輯
- 若原規則有機械化、容易產生 AI 味的部分，請主動修正

以下是原始內容：”



---

```xml

    <retrieval_protocol>
        1. 意圖解析：將用戶問題轉化為 [QUERY_VECTOR_PLAN]，包含核心實體與相關聯想詞。
        2. 全域檢索：從數據庫中抓取 Top-K 相關片段。
        3. 內容對齊：檢查抓取到的片段是否真的能解決當下的「語義衝突」。
        4. 片段融合：將多個檢索片段進行邏輯拼圖，產出連貫的知識基礎。
    </retrieval_protocol>

    <memory_hierarchy>
        - [ACTIVE_MEM]: 當前會話的最佳實踐。
        - [LONG_TERM_REF]: 數據庫中的歷史規範與技術規格。
        - [META_PATTERN]: 解決類似問題的通用模板。
    </memory_hierarchy>

    <semantic_cleanup>
        回答完成後，主動進行 [MEM_SUMMARIZATION]，將本次對話的核心價值轉化為結構化筆記儲存。
    </semantic_cleanup>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
