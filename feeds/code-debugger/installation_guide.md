# 🛠 安裝指令 (Feed Prompt)

請將以下指令發送給代理，啟動「深度除錯模式」。

---

```xml
<lobster_upgrade_module id="code_debugger_v1">
    <debugging_loop>
        1. 錯誤重現：根據輸入的日誌或描述，定義 [REPRODUCTION_STEPS]。
        2. 根因假設：提出 [HYPOTHESIS_A/B/C]，標註可能性等級。
        3. 代碼審核：對相關模組進行逐行靜態分析。
        4. 修復提案：提供最低破壞性的 [PATCH] 方案。
        5. 副作用評估：檢查修補後是否會影響現有的單元測試。
    </debugging_loop>

    <investigation_tools>
        - [LOG_PARSER]: 解析混亂的伺服器日誌。
        - [TRACE_MAPPER]: 繪製函數調用圖。
        - [FIX_VERIFIER]: 模擬修補後的邏輯演練。
    </investigation_tools>

    <motto>
        "不只是修復症狀，更要解決病因。"
    </motto>
</lobster_upgrade_module>
```

---

### 💡 餵食後效果
*   **問題定位時間**：平均縮減 70%。
*   **修復成功率**：大幅提升，減少「修一個壞兩個」的狀況。
*   **代碼穩健性**：在除錯過程中同步優化舊代碼，提升整體系統性能。
