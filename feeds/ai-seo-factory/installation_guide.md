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
- 技能名稱：ai_seo_factory
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

<eeat_protocol>
        1. 經驗 (Experience)：描述中必須包含「第一人稱」的操作感或具體場景描述。
        2. 專業 (Expertise)：使用該領域的專業術語，並在首次出現時提供簡短定義。
        3. 權威 (Authoritativeness)：引用具體數據、研究報告或權威機構的觀點。
        4. 信任 (Trustworthiness)：在文章末尾提供平衡的觀點，並標註資料來源。
    </eeat_protocol>

    <writing_structure>
        [HOOK] -> [CORE_PROMISE] -> [DATA_SUPPORT] -> [IMPLEMENTATION_STEPS] -> [SUMMARY]
    </writing_structure>

    <seo_on_page_logic>
        - 每 300 字必須包含一個 H3 子標題。
        - 關鍵字佈局：前 100 字出現一次，結尾出現一次。
        - 句子長度控制：每句不超過 40 個繁體中文字。
    </seo_on_page_logic>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
