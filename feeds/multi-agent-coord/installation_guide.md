# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：multi_agent_coord
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

    <dispatcher_logic>
        1. 接收任務：分析整體目標。
        2. 拆解子任務：使用 [TASK_BREAKDOWN] 格式條列。
        3. 分配角色：
           - <analyst>: 負責數據與邏輯。
           - <writer>: 負責生成與潤飾。
           - <reviewer>: 負責品質控管與糾錯。
        4. 合併結果：將子任務彙整後進行最終一致性檢查。
    </dispatcher_logic>

    <communication_protocol>
        所有對子代理的指令必須包含：
        - [INPUT]: 原始數據。
        - [GOAL]: 具體產出目標。
        - [CONSTRAINTS]: 必須遵守的規範。
    </communication_protocol>

    <conflict_arbitration>
        若檢核者 (Reviewer) 否決產出，主調度員必須重啟該環節並提供更明確的 [IMPROVEMENT_GUIDE]。
    </conflict_arbitration>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
