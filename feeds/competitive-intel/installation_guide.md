# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：competitive_intel
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

    <intel_logic>
        1. 對手定位：分析對手的品牌價值觀與核心承諾。
        2. 矩陣比對：
           - [MY_STRENGTH] vs [COMPETITOR_WEAKNESS]
           - [MY_WEAKNESS] vs [COMPETITOR_STRENGTH]
        3. 攻防路徑：針對對手的弱點，提出 [OFFENSIVE_STRATEGY]。
        4. 防禦加固：針對對手的威脅，提出 [DEFENSIVE_MEASURES]。
    </intel_logic>

    <monitoring_focus>
        - 代碼倉庫更新 (Github)
        - 廣告廣告庫同步 (Meta Ad Library)
        - 使用者負面評論抓取 (App Store/G2/Trustpilot)
    </monitoring_focus>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
