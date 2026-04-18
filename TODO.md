# Guardian God Web — TODO

## P0 待办

- [ ] **接入 Umami 分析**
  - 注册 Umami Cloud（umami.is）或自建
  - 在 `app/layout.tsx` 加入统计脚本
  - 国内可用，无 Cookie，免费额度够用

- [ ] **二维码替换真实 URL**
  - 部署后把 `app/components/ShareCard.tsx` 里的 `SITE_URL` 改成真实域名
  - 用 `qrcode` 包生成真实二维码替换占位框

## P1 待办

- [ ] **绑定自定义域名**
  - 购买域名（推荐 Cloudflare Registrar，成本价）
  - Cloudflare 代理 → 提升国内访问稳定性
  - Vercel 绑定自定义域名

## P2 待办

- [ ] **微信 JS-SDK 分享**
  - 需要微信公众号
  - 支持自定义分享标题、封面图、描述
  - 暂时搁置，等有公众号再做

- [ ] **神明图片统一风格**
  - 当前图片风格不统一
  - 重新生成 16 张中国古典工笔/水墨风格

- [ ] **启动页动画**
  - Landing 页加 logo 入场动画
  - 不要冷启动直接进题目
