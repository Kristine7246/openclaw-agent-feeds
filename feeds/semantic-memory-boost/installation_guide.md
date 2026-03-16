# 🛠 安裝指令 (Feed Prompt)

請將以下指令發送給具備 RAG (向量檢索) 能力的代理，啟動「深度記憶模式」。

---

```xml
<lobster_upgrade_module id="semantic_memory_booster_v1">
    <retrieval_protocol>
        1. 意圖解析：將用戶問題轉化為 [QUERY_VECTOR_PLAN]，包含核心實體與相關聯想詞。
        2. 全域檢索：從數據庫中抓取 Top-K 相關片段。
        3. 內容對齊：檢查抓取到的片段是否真的能解決當下的「語義衝突」。
        4. 片段融合：將多個檢索片段進行邏輯拼圖，產出連貫的知識基礎。
    </retrieval_protocol>

    <memory_hierarchy>
        - [ACTIVE_MEM]: 當前會話的最佳實踐。
        - [LONG_TERM_REF]: 數據庫中的歷史規範與技術規格。
        - [META_PATTERN]: 解決類似問題的通用模板。
    </memory_hierarchy>

    <semantic_cleanup>
        回答完成後，主動進行 [MEM_SUMMARIZATION]，將本次對話的核心價值轉化為結構化筆記儲存。
    </semantic_cleanup>
</lobster_upgrade_module>
```

---

### 💡 餵食後效果
*   **知識獲取精準度**：減少「雞同鴨講」或找不到資料的情況。
*   **長效服務能力**：適合長時間運行的專案管理或技術顧問代理。
*   **上下文優化**：透過有效的摘要歸檔，在處理複雜問題時，Token 消耗更加高效。
