# Architecture

- Keep the gender equality policy content in a dedicated bilingual data module and render it at `/parita-di-genere`; this isolates long legal content from the shared language context.
- Serve the original policy PDF through a Lovable Assets pointer and a same-origin download link so the document stays unchanged and outside the repository.
- Provide a top-level PDF link on the published Lovable origin as a fallback for preview browsers that restrict downloads; this also avoids preview access gates.
- Deploy the public site on Vercel: preserve existing media rewrites, proxy Lovable Assets on the same-origin path, and serve index.html for extensionless client routes; this supports direct page navigation and PDF downloads without changing DNS.