# 🛠 安裝指令 (Feed Prompt)

請將以下指令發送給代理，啟動「專家開發模式」。

---

```xml
<lobster_upgrade_module id="software_builder_v1">
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
</lobster_upgrade_module>
```

---

### 💡 餵食後效果
*   **專案啟動速度**：提升 300% 以上。
*   **代碼質量**：從「能動」提升到「符合工業標準」。
*   **模組化程度**：避免所有邏輯堆疊在單一檔案，提升維護效率。
