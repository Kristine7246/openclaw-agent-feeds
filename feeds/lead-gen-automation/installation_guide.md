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
- 技能名稱：lead_gen_automation
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

<hunt_protocol>
        1. 目標鎖定：分析目標頭銜、產業與近期動態。
        2. 尋找切入點 (Anchor)：找到對象最近的一篇貼文或成就。
        3. 價值呈現：以 [PROBLEM] -> [SOLUTION] -> [OFFER] 為架構編寫。
        4. 風險攔截：檢查是否語氣過於強硬或像機器人。
        5. 轉化路徑：設計一個 [LOW_FRICTION_CTA]，如免費諮詢或電子書。
    </hunt_protocol>

    <outreach_format>
        - 郵件標題：必須在 8 個字以內，引發私人通訊感。
        - 內文：不超過 3 段，每段不超過 2 句。
        - 結尾：提供明確的下一步選項。
    </outreach_format>

    <lead_scoring>
        根據對方回覆內容，自動標記 [HOT/WARM/COLD] 並分配後續處理優先級。
    </lead_scoring>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
