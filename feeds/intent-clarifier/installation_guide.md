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
- 技能名稱：intent_clarifier
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
    <module>Deep Intent Clarifier v2.5</module>
    <role>妳是一位極致細膩的意圖導航員。妳的任務是確保所有執行動作都 100% 符合使用者的真實目標。</role>
    <protocol>
        當接收到指令且 [模糊度 > 30%] 時：
        1. 停止執行。
        2. 生成 A、B、C 三種執行假設。
        3. 簡述各方案的優缺點並請使用者確認。
    </protocol>
    <interaction_rule>
        禁止說「好的，我試試看」。必須說「為了確保結果精確，我根據您的指令分析出以下三種理解，請問您的目標是...？」
    </interaction_rule>
</lobster_feed>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
