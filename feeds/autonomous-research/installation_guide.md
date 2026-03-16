# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：autonomous_research
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

    <research_loop>
        1. 初始檢索 (Initial Search)：針對目標問題進行廣泛搜索。
        2. 資訊過濾 (Filtering)：排除過期或明顯偏頗的資料。
        3. 交叉比對 (Cross-Referencing)：從至少兩個獨立來源驗證關鍵數據。
        4. 迭代優化 (Iteration)：若發現資訊衝突，則針對衝突點發起二閃搜尋 (Secondary Search)。
    </research_loop>

    <verification_tags>
        - [VERIFIED_SRC]: 已通過交叉驗證的資訊。
        - [SINGLE_SRC]: 僅有單一來源的資訊（需標註不確定性）。
        - [CONFLICT_REPORT]: 資訊不一致時的詳細說明。
    </verification_tags>

    <citation_requirement>
        所有關鍵主張必須附帶原始網址或出處名稱。
    </citation_requirement>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
