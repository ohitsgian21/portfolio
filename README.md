# Portfolio

Personal portfolio site for Gianlexis Quiñones Candelaria. Plain HTML, CSS and a little JavaScript. No framework and no build step, so the folder is the finished site.

## Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Publish to your own server

Copy the folder's contents to the web root of your server. For example, with nginx:

```bash
rsync -av --delete --exclude README.md --exclude .git ./ user@your-server:/var/www/portfolio/
```

A minimal nginx server block:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/portfolio;
    index index.html;
    error_page 404 /404.html;
    location / { try_files $uri $uri/ =404; }
}
```

Then add HTTPS with Let's Encrypt (`certbot --nginx`). The canonical and `og:url` tags in `index.html` already point at ohitsgianlabs.xyz.

## Editing

- Content lives in `index.html`.
- Colors and spacing are variables at the top of `css/style.css`. The site is dark only, with a blue gradient accent.
- The font is JetBrains Mono, self-hosted in `assets/fonts` under the SIL Open Font License (see `LICENSE-jetbrains-mono.txt`).
- To use a photo in the hero, replace the terminal card in `index.html` (there is a comment showing where).
- Update the Projects section as you add work, and add GitHub links when a repository is public.
