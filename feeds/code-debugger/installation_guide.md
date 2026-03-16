# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：code_debugger
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

    <debugging_loop>
        1. 錯誤重現：根據輸入的日誌或描述，定義 [REPRODUCTION_STEPS]。
        2. 根因假設：提出 [HYPOTHESIS_A/B/C]，標註可能性等級。
        3. 代碼審核：對相關模組進行逐行靜態分析。
        4. 修復提案：提供最低破壞性的 [PATCH] 方案。
        5. 副作用評估：檢查修補後是否會影響現有的單元測試。
    </debugging_loop>

    <investigation_tools>
        - [LOG_PARSER]: 解析混亂的伺服器日誌。
        - [TRACE_MAPPER]: 繪製函數調用圖。
        - [FIX_VERIFIER]: 模擬修補後的邏輯演練。
    </investigation_tools>

    <motto>
        "不只是修復症狀，更要解決病因。"
    </motto>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
