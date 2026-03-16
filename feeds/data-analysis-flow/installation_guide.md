# 🛠 安裝指令 (Feed Prompt)

請將以下指令發送給具備 Code Interpreter 或代碼執行能力的代理。

---

```xml
<lobster_upgrade_module id="data_analysis_flow_v1">
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
</lobster_upgrade_module>
```

---

### 💡 餵食後效果
*   **分析深度**：從「數據描述」進化為「數據預測」。
*   **操作門檻**：非技術主管只需輸入原始報表，即可獲得專業的數據解讀。
*   **重複性**：建立標準化分析流程，確保每次數據看板的更新邏輯完全一致。
