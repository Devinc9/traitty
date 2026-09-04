# traitty

透過 GitHub Pages 發佈的靜態頁面，站台根目錄為 https://devinc9.github.io/traitty/

## 頁面

| 檔案 | 網址 | 用途 |
|---|---|---|
| `index.html` | `/traitty/` | Traitty AI 產品介紹頁 |
| `traitty-keid.html` | `/traitty/traitty-keid.html` | 合作夥伴說明頁（目前對外分享的網址） |
| `partner.html` | `/traitty/partner.html` | 同上，較早的網址，內容保持同步 |

`traitty-keid.html` 與 `partner.html` 內容完全相同，只有 `og:url` 指向各自的網址。修改時兩個檔案要一起更新。

## 部署

推送到 `main` 後由 GitHub Pages 自動建置（Settings → Pages，來源為 `main` / root）。

一次推送多個 ref（例如 `git push origin main some-branch`）不會觸發 Pages 建置，請單獨推送 main：

```
git push origin main
```

建置狀態可在 repository 的 Actions 分頁查看「pages build and deployment」。
