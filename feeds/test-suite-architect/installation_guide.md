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
- 技能名稱：test_suite_architect
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

<testing_protocol>
        1. 邏輯審核：分析目標代碼的條件分支與循環。
        2. 邊界設定：定義 [MIN/MAX/NULL/INVALID] 等測試參數。
        3. 斷言設計：確保每個測試都有明確的 [EXPECTED_RESULT]。
        4. 測試撰寫：生成 Jest/Pytest/Cypress 等指定框架的腳本。
        5. 風險報告：指出代碼中可能因「不可測性」而存在的潛在 Bug。
    </testing_protocol>

    <motto>
        "程式碼不只是要能動，更要證明它不會在壞情況下亂動。"
    </motto>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
