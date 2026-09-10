# Frank Portfolio

A static portfolio website designed to closely match the layout and visual style of the supplied reference:
- off-white background
- burgundy/red accent
- rounded pill buttons
- large hero introduction
- two-column About / Tech Stack section
- 2×2 project card grid
- responsive mobile navigation

## 1. Customize the content

Open `index.html` and replace:

- `YOUR_USERNAME` in the GitHub link
- `YOUR_USERNAME` in the LinkedIn link
- `YOUR_EMAIL@example.com`
- project `href="#"` links with your GitHub repos / project pages

### CV
Place your real CV at:

`assets/Frank_CV.pdf`

The existing CV button already points there.

## 2. Preview locally

The site is plain HTML/CSS/JS, so you can simply open `index.html`.

For a more realistic local web server:

```bash
python3 -m http.server 8000
```

Then visit:

`http://localhost:8000`

## 3. Deploy with GitHub Pages

### Recommended option: personal portfolio repository

Create a GitHub repository named:

`YOUR_GITHUB_USERNAME.github.io`

Then, from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
```

On GitHub:

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save.

Your site will be available at:

`https://YOUR_GITHUB_USERNAME.github.io/`

### If you use a normal repo name

For example:

`portfolio`

GitHub Pages will normally publish it at:

`https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

This site uses relative asset paths, so it works in either case.

## 4. Suggested next improvements

- Add a real profile/illustration.
- Link each project card to a dedicated project detail page.
- Add publication and research sections.
- Add a downloadable CV.
- Add a custom domain later if desired.
