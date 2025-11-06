# Eleventy PaperCMS Base

The Eleventy PaperCMS Base repository is a template for building static websites. It uses [Eleventy](https://www.11ty.dev/) (or 11ty for short) as a static site generator, and by default supports the use of [Pages CMS](https://pagescms.org/) as the content management system. This project is based off of [Eleventy's example blog](https://github.com/11ty/eleventy-base-blog), modified to suit my own needs.

This repository acts both as a project template for me to use for my own websites, and a place to store notes on Eleventy features that I typically use. Many folders and files within this project include comments explaining the purpose and logic behind code. When cloning this repository, you'll probably want to remove them.

## Notes

- Two form of user-generated pages can be used: "pages" and "posts"
	- Posts are standard blog posts.
	- Pages are similar to posts, but stripped of any frontmatter/metadata. This is an niche option for when you have a post that you don't want to treat as a normal blog post. Pages are not accessable in the site by default apart from direct linking.
	- Both pages and posts use Markdown syntax for editing. Pages CMS internally labels this as `rich-text`.
- The majority of HTML code has no classes.
- If you plan on having an RSS feed for your website, keep in mind that the settings for RSS are defined in `eleventy.config.js`. This should ideally have the same metadata as `_data/metadata.json`, but there is no connection between the two files.
