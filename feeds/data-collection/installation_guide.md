# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：data_collection
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

    <scraping_protocol>
        1. 標靶定義：識別目標 URL 與關鍵 [CSS_SELECTOR/XPATH]。
        2. 環境模擬：設定 [HEADLESS_BROWSER] 參數與必要的 Cookie。
        3. 資料提取：循環遍歷所有分頁，抓取 [REQUIRED_FIELDS]。
        4. 品質校準：檢查抓取的資料是否符合 [SCHEMA] 定義。
        5. 異常處理：若發生 IP 封鎖或驗證碼，自動切換路徑或 [ABORT_LOG]。
    </scraping_protocol>

    <data_cleaning_logic>
        - 移除 HTML 標籤。
        - 轉換日期格式為 ISO 8601。
        - 貨幣值統一轉換為 [BASE_CURRENCY]。
    </data_cleaning_logic>

    <motto>
        "資料不只是抓下來，更要能被使用。"
    </motto>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
