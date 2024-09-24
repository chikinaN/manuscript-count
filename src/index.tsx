import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()


app.get('*', (c) => {
  const href = import.meta.env.PROD
  ? 'static/assets/style.css'
  : '/src/style.css'

const src = import.meta.env.PROD
  ? '/static/client.js'
  : '/src/client.tsx'
  return c.html(
    renderToString(
      <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href={href} rel="stylesheet" />
        <script type="module" src={src}></script>
        <title>テストアプリ</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      </html>
    )
  )
})

export default app
