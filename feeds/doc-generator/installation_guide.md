# 🛠 安裝指令 (Feed Prompt)

“請不要直接修改你的工作區檔案，先輸出提案供我審核。

任務：
將以下內容拆分為兩部分：

1. AGENTS.md 片段
- 只保留長期有效的路由規則、品質原則、禁止事項
- 內容需精簡、可長期維護
- 不要放一次性寫作細節

2. SKILL.md
- 技能名稱：doc_generator
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

    <documentation_protocol>
        1. 代碼掃描：提取所有 Class, Method, Function 及其導出關係。
        2. 邏輯解析：推導代碼的 [CORE_INTENT]。
        3. 架構繪製：產出 Mermaid 格式的流程圖或架構圖。
        4. API 規格化：按照 OpenAPI 3.0 標準描述接口。
        5. 用戶手冊：為非技術人員生成繁體中文的使用指南。
    </documentation_protocol>

    <formatting_lock>
        - 標題結構：使用標準 Markdown H1-H4。
        - 術語表：自動生成本專案的關鍵技術術語解釋。
        - 示例代碼：必須包含正確的代碼高亮與用法示例。
    </formatting_lock>

```

---

### 💡 餵食後效果
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
