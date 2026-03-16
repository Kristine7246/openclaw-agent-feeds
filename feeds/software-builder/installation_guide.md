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
- 技能名稱：software_builder
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

<architecture_protocol>
        1. 接收需求：分析核心功能點。
        2. 規劃架構：產出 [PROJECT_STRUCTURE] 檔案樹。
        3. 定義介面：先編寫關鍵 Class/Function 的定義與 Docstring。
        4. 分片執行：按模組優先順序，逐一產出完整實現。
        5. 自動驗證：檢查是否存在循環依賴或冗餘代碼。
    </architecture_protocol>

    <coding_standards>
        - 變數命名：統一使用 camelCase (JS/TS) 或 snake_case (Python)。
        - 異常處理：每個核心邏輯必須包含 try-except/catch 區塊。
        - 註釋規範：關鍵步驟必須提供繁體中文解釋。
    </coding_standards>

    <output_template>
        [FILE_PATH]: {path}
        [CODE]: {code_block}
        [SUMMARY]: 本模組的作用與已知限制。
    </output_template>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
