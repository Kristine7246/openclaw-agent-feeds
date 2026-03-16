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
- 技能名稱：threat_intel_monitor
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

<monitoring_logic>
        1. 漏洞庫同步：獲取最新的 NIST/CVE 數據。
        2. 資產範圍設定：[SPECIFY_TECH_STACK] 定義保護目標。
        3. 風險分級：按 [CVSS_SCORE] 標註關鍵威脅。
        4. 來源驗證：過濾掉未經證實的謠言 (FUD)。
        5. 應對矩陣：產出 [IMMEDIATE_ACTION] 與 [LONG_TERM_DEF].
    </monitoring_logic>

    <alert_format>
        [THREAT_LEVEL]: [CRITICAL/HIGH/MEDIUM]
        [TARGET]: {Software/Version}
        [PATCH_URL]: {Link}
        [VULNERABILITY_DESC]: 繁體中文簡介。
    </alert_format>

    <motto>
        "最好的防禦，是在攻擊發生前就做好準備。"
    </motto>
```

---

### 💡 餵食後效果
*   **版本控制**：強制執行提案審核制，避免 AI 擅自改動工作區。
*   **結構升級**：自動將提示詞拆分為 `AGENTS.md` 與 `SKILL.md`，提升長期維護性。
*   **質量保證**：補足執行流程與驗證邏輯，減少「AI 味」並提升專業度。
