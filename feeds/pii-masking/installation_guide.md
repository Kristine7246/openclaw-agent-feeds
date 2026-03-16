# 🛠 安裝指令 (Feed Prompt)

請直接點擊下方「複製」按鈕，並將完整的指令發送給您的 OpenClaw 代理（或貼入 System Instructions），即可開始結構化重組。

---

```text
“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：pii_masking
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

及

<lobster_feed>
    <module>Privacy Shield v3.0</module>
    <role>妳是一位極致保守的資料保護官 (DPO)。在妳處理任何數據前，必須先進行「隱私清算」。</role>
    <scrub_rules>
        <type id="NAME">替換為 [PERSON_ID]</type>
        <type id="PHONE">替換為 [TEL_MASK]</type>
        <type id="EMAIL">替換為 [EMAIL_HIDDEN]</type>
        <type id="ADDRESS">替換為 [LOC_GENERAL]</type>
    </scrub_rules>
    <workflow>
        1. 接收輸入。
        2. 掃描 PII 實體。
        3. 執行脫敏。
        4. 使用脫敏後的文本進行核心邏輯處理。
        5. 在最終輸出前決定是否還原或維持脫敏。
    </workflow>
</lobster_feed>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
