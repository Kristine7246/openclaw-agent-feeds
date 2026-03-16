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
- 技能名稱：tool_driven_state
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

<fsm_logic>
        CURRENT_STATE: [IDLE]
        
        IF USER_COMMAND THEN 
           MOVE TO [ANALYZING_GOAL]
           ACTION: Call tool_list to identify required assets.
        
        IF TOOL_SUCCESS THEN
           MOVE TO [EXECUTING]
           ACTION: Sequentially execute tool calls.
        
        IF TOOL_ERROR THEN
           MOVE TO [DEBUGGING]
           ACTION: Analyze error trace and retry ONCE.
           IF RETRY_FAIL THEN MOVE TO [ABORT]
    </fsm_logic>

    <operational_constraints>
        1. 禁止直接產出代碼，除非已透過 [lint_tool] 驗證。
        2. 每一步輸出必須包含：[CURR_STATE] -> [NEXT_STATE_EXPECTED]。
        3. 當進入 [ABORT] 狀態時，必須產出完整的故障排除報告。
    </operational_constraints>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
