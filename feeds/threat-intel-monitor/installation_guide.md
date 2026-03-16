# 🛠 安裝指令 (Feed Prompt)

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



---

```xml

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
*   **運作模式**：遵循 OpenClaw 標準化技能架構。
*   **溝通模式**：優先提案審核制，確保工作區安全。
*   **品質保證**：內建自檢清單（Self-check checklist）與錯誤處理（Failure modes）。
