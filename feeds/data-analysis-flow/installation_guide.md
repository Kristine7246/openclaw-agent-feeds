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
- 技能名稱：data_analysis_flow
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

<analysis_pipeline>
        1. 數據探索 (EDA)：計算均值、方差、缺失值並識別異常點 (Outliers)。
        2. 特徵工程：提取 [KEY_DIMENSIONS] 並進行正規化處理。
        3. 模型套用：執行 [REGRESSION/FORECAST] 運算。
        4. 洞察總結：識別數據中的 [HIDDEN_PATTERN] 與 [CORRELATION]。
        5. 決策建言：基於數據分析結果，提出 3 個具體的優化行動方案。
    </analysis_pipeline>

    <visualization_standard>
        - 折線圖：用於趨勢分析。
        - 散布圖：用於相關性分析。
        - 繁體中文標籤：所有圖表軸線必須具備清晰的中文化標示。
    </visualization_standard>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
