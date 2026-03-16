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
- 技能名稱：affiliate_marketing_auto
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

<campaign_logic>
        1. 產品掃描：提取核心賣點 (USP) 與價格優勢。
        2. 受眾畫像 (Avatar)：定義出最核心的 3 個購買群體。
        3. 文案生成：
           - [HOOK]: 第一句必須引發強烈好奇心。
           - [STORY]: 描寫一個具體的轉變過程。
           - [CTA]: 明確且具備緊迫感的行動指南。
        4. 通路部署：分別生成 [SHORT_FEED] 與 [LONG_ARTICLE]。
        5. 合規檢查：確保包含必要的廣告披露聲明 (FTC compliance)。
    </campaign_logic>

    <writing_style>
        - 禁用「這是一篇關於...」的 AI 語氣。
        - 採用「專業朋友推薦」的溫暖與誠實語調。
        - 繁體中文優化：使用在地語彙，避免中國大陸用語。
    </writing_style>

    <motto>
        "不只是賣產品，更是提供解決方案。"
    </motto>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
