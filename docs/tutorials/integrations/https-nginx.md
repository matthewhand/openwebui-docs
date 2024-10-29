---
sidebar_position: 2
title: "🚀 Quick Start"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { TopBanners } from "@site/src/components/TopBanners";

import SelfSigned from './tab-nginx/SelfSigned.md';
import LetsEncrypt from './tab-nginx/LetsEncrypt.md';

<TopBanners />

## How to Install 🚀

:::info **Important Note on User Roles and Privacy:**

- **Admin Creation:** The first account created on Open WebUI gains **Administrator privileges**, controlling user management and system settings.
- **User Registrations:** Subsequent sign-ups start with **Pending** status, requiring Administrator approval for access.
- **Privacy and Data Security:** **All your data**, including login details, is **locally stored** on your device. Open WebUI ensures **strict confidentiality** and **no external requests** for enhanced privacy and security.

:::

Choose your preferred installation method below:

- **Docker:** Recommended for most users due to ease of setup and flexibility.
- **Kubernetes:** Ideal for enterprise deployments that require scaling and orchestration.
- **Python:** Suitable for low-resource environments or those wanting a manual setup.

<Tabs>
  <TabItem value="self-signed" label="Self-Signed Certificate">
    <SelfSigned />
  </TabItem>

  <TabItem value="letsencrypt" label="Let's Encrypt">
    <LetsEncrypt />
  </TabItem>
</Tabs>

## Next Steps

After installing, visit:

- [http://localhost:3000](http://localhost:3000) to access OpenWebUI.
- or [http://localhost:8080/](http://localhost:8080/) when using a Python deployment.

You are now ready to start **[Using OpenWebUI](../using-openwebui/index.mdx)**!

## Join the Community

Need help? Have questions? Join our community:

- [Open WebUI Discord](https://discord.gg/5rJgQTnV4s)
- [GitHub Issues](https://github.com/open-webui/open-webui/issues)

Stay updated with the latest features, troubleshooting tips, and announcements!

## Conclusion

Thank you for choosing Open WebUI! We are committed to providing a powerful, privacy-focused interface for your LLM needs. If you encounter any issues, refer to the [Troubleshooting Guide](../../troubleshooting/index.mdx).

Happy exploring! 🎉

---
