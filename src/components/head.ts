import { readFileSync } from 'fs'

const fonts = readFileSync(
  './node_modules/@fortawesome/fontawesome-free/js/all.js',
  'utf8',
)
export const head = `
<script>${fonts}</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  white-space: pre-wrap;
}
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:active { text-decoration: none; }
</style>
`
