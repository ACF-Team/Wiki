---
title: Wiki Contribution
nav_order: 10
---

The wiki is hosted through GitHub pages, with the source code located in a separate [GitHub](https://github.com/ACF-Team/Wiki) repository.

# Installation
1. Clone the repository
2. Navigate to the root folder (it should contain `README.md`)

You can modify files and contribute now. If you want to host locally for rapid iteration:
4. Make sure you have:
    - `Ruby` (>= 3.0 recommended)
    - `Bundler`
5. Verify your install:
    - `ruby -v`
    - `bundle -v`
6. Setup (first time only):
    - `bundle install`
7. Start the deployment server:
    - `bundle exec jekyll serve`
8. You can access the website at `http://localhost:4000/Wiki`

# Organization
- Place all tutorials under `docs/tutorial_name/`
- Place all media under `assets/images/tutorial_name/` or `assets/videos/tutorial_name/`, etc.
- Under `_includes/` there are helper html files that act like functions that can accept arguments.
For instance, `{% include image.html src="first_car/aio.png" width="25%" %}` includes an image from `assets/first_car/aio.png` with width set to 25%.
- You generally should not need to touch any files or folders starting with `_`, such as `_sass/`, `_layouts/`, `_config.yml`. Please contact us if you need to modify them.

# Libraries/Frameworks
- We use [Jekyll](https://jekyllrb.com/tutorials/home/) to generate the html files for our website. Most of the time you will be working with Markdown files (similar to discord's formatting), rather than html directly.
- We use [Just The Docs](https://just-the-docs.com/) as our Jekyll theme. This is mainly for styling and you are not required to understand it.