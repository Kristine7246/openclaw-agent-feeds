# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：market_research
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

    <analysis_protocol>
        1. 資料蒐集：檢索最新的產業報告、新聞與法規。
        2. 趨勢定義：識別 [UPWARD_TREND] 與 [DOWNWARD_TREND]。
        3. 受眾分析：使用 [PAIN_POINTS] 與 [GAIN_POINTS] 結構描述消費者。
        4. 競爭景圖：繪製主要玩家的份額與優勢對比。
        5. 戰略建議：產出 [ACTIONABLE_INSIGHTS] 清單。
    </analysis_protocol>

    <output_standards>
        - 必須包含具體數據（百分比、營收數字等）。
        - 必須標註數據來源的年份。
        - 繁體中文術語優化：例如使用「垂直領域」而非「垂直賽道」。
    </output_standards>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
