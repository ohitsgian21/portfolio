# Portfolio

My personal site, live at [www.ohitsgianlabs.xyz](https://www.ohitsgianlabs.xyz). It covers who I am, what I have built, my skills and my work history, with a downloadable CV.

It is plain HTML, CSS and a little JavaScript. There is no framework and no build step, so the files in this repository are the site. It is served from this repository with GitHub Pages (the `CNAME` file holds the domain).

## Run it locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Layout

| Path | What it is |
|---|---|
| `index.html` | All the page content |
| `css/style.css` | Styles; colors and spacing are variables at the top |
| `js/main.js` | Scroll reveals, count-up numbers, the project filter and the mobile menu |
| `assets/` | Favicon, share image, CV (PDF) and the self-hosted fonts |
| `404.html`, `robots.txt`, `sitemap.xml` | Error page and search engine files |

The font is JetBrains Mono, self-hosted under the SIL Open Font License (see `assets/fonts/LICENSE-jetbrains-mono.txt`).

## Contact

Gianlexis Quiñones Candelaria · [LinkedIn](https://www.linkedin.com/in/gianquinones21/) · [GitHub](https://github.com/ohitsgian21) · gianquinones21@gmail.com
