---
title: Wiki Contribution
nav_order: 9
---

The wiki is hosted through GitHub pages, with the source code located in a separate [GitHub](https://github.com/LengthenedGradient/Wiki) repository.

1. Clone the repository
2. Navigate to the root folder (it should contain `README.md`)
3. You can modify files and contribute now. If you want to host locally for rapid iteration:
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