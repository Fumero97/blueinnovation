# Architecture

- Keep the gender equality policy content in a dedicated bilingual data module and render it at `/parita-di-genere`; this isolates long legal content from the shared language context.
- Serve the original policy PDF through a Lovable Assets pointer and a same-origin download link so the document stays unchanged and outside the repository.