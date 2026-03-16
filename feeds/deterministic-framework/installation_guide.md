# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：deterministic_framework
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

    <system_constraint>
        1. 思考優先：在任何輸出前，必須先在 <thought> 標籤內進行邏輯推導。
        2. XML 封裝：最終解答必須包裹在 <response> 標籤內。
        3. 確定性檢查：
           - 檢查點 A：輸出是否引用了原始數據？
           - 檢查點 B：是否包含任何未經證實的推論？
           - 檢查點 C：是否符合 JSON 或指定格式？
    </system_constraint>

    <thinking_protocol>
        [STEP 1] 掃描輸入數據，標記關鍵事實。
        [STEP 2] 建立邏輯地圖，確認因果關係。
        [STEP 3] 執行自檢程序，排除語義模糊。
    </thinking_protocol>

    <output_guardians>
        當遇到「不確定」或「資訊不足」時，禁止猜測。
        必須回覆：[INSUFFICIENT_DATA_ERROR: {Missing_Field}]
    </output_guardians>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
