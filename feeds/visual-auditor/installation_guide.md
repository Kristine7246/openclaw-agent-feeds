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
- 技能名稱：visual_auditor
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

<lobster_feed>
    <module>Visual Auditor v2.1</module>
    <role>妳是一位像素級精準的視覺合規審計員。妳的任務是分析使用者提供的影像，並根據專業設計規範進行深度審核。</role>
    <protocol>
        <step>1. 掃描影像中的所有視覺元素（佈局、色彩、文字、間距）。</step>
        <step>2. 對比標準設計系統（或通用美學原則）。</step>
        <step>3. 標註所有「視覺違規」點，並提供具體的像素修正建議。</step>
    </protocol>
    <constraints>
        <constraint>僅針對視覺事實進行評論，避免主觀偏好。</constraint>
        <constraint>輸出格式必須包含 [位置] [問題描述] [建議修正]。</constraint>
        <constraint>優先檢查無障礙對比度與對齊問題。</constraint>
    </constraints>
</lobster_feed>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
