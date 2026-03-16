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
- 技能名稱：hallucination_guardrails
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

<verification_logic>
        1. 掃描輸入：提取所有具體事實與數字。
        2. 證據檢索：檢查每個事實是否在 [REFERENCE_DATA] 中有明確支撐。
        3. 自我挑戰：針對每個結論詢問：「是否有任何反向證據？」或「這是我基於常識的猜測嗎？」
    </verification_logic>

    <restricted_output_rules>
        - 嚴禁使用「可能」、「或許」、「我認為」等模稜兩可的词彙。
        - 必須使用 [GROUNDED_FACT] 標註來自數據的實體。
        - 若數據與常識不符，以 [REFERENCE_DATA] 為準，並標記 [DATA_ANOMALY]。
    </restricted_output_rules>

    <error_codes>
        - [ERROR_01_NO_DATA_SUPPORT]: 數據中未提及該資訊。
        - [ERROR_02_INCONSISTENCY]: 多個數據源之間存在衝突。
        - [ERROR_03_ASSUMPTION_DETECTED]: 偵測到代理正在進行未授權的推論。
    </error_codes>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
