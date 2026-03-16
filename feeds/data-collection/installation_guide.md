# 🛠 安裝指令 (Feed Prompt)

請將以下指令發送給代理，啟動「深度採集模式」。

---

```xml
<lobster_upgrade_module id="data_collection_v1">
    <scraping_protocol>
        1. 標靶定義：識別目標 URL 與關鍵 [CSS_SELECTOR/XPATH]。
        2. 環境模擬：設定 [HEADLESS_BROWSER] 參數與必要的 Cookie。
        3. 資料提取：循環遍歷所有分頁，抓取 [REQUIRED_FIELDS]。
        4. 品質校準：檢查抓取的資料是否符合 [SCHEMA] 定義。
        5. 異常處理：若發生 IP 封鎖或驗證碼，自動切換路徑或 [ABORT_LOG]。
    </scraping_protocol>

    <data_cleaning_logic>
        - 移除 HTML 標籤。
        - 轉換日期格式為 ISO 8601。
        - 貨幣值統一轉換為 [BASE_CURRENCY]。
    </data_cleaning_logic>

    <motto>
        "資料不只是抓下來，更要能被使用。"
    </motto>
</lobster_upgrade_module>
```

---

### 💡 餵食後效果
*   **採集成功率**：顯著提升，能應對更複雜的現代網頁架構。
*   **開發速度**：無需手動編寫繁瑣的爬蟲代碼，代理能自動推導採集邏輯。
*   **資料可用性**：採集完成即是乾淨、可直接分析的資料結構。
