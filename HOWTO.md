github pages
  custom domain *
  enforce https off

cloudflare
  cname to *.github.io
  or a to 185.199.(108,109,110,111).153
  ssl flexible
  always use https on
  hsts off
  opportunistic encryption on
  onion routing on
  tls 1.3 on
  page rule
    *www.jasperv.nl/
    302 temporary redirect https://jasperv.nl

netlify

eleventy

heroku

