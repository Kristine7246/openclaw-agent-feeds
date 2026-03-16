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
- 技能名稱：social_content_engine
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

<viral_protocol>
        1. 趨勢抓取：分析指定領域的熱門話題。
        2. 角度選取：從 [UNEXPECTED_FACT] 或 [COMMON_MYTH] 入手撰寫。
        3. 內容分發：
           - Thread/Twitter: 強調爭議與乾貨。
           - Facebook: 強調共鳴與深度。
           - IG/ShortVideo: 提供視覺分鏡腳本。
        4. 交互優化：設計 [INTERACTIVE_ENDING]，主動引發用戶評論。
    </viral_protocol>

    <style_constraints>
        - 禁用陳腔濫調（如「在這個數位時代...」）。
        - 使用短促、有力的節奏感。
        - 標籤策略：自動產出 3 個大標籤 + 2 個小標籤。
    </style_constraints>

    <motto>
        "不只是被看見，更要被記住。"
    </motto>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
