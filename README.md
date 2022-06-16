<p align="center">
  <a href="https://meoki.net">
    <img src="content/favicon.png" />
  </a>
</p>

<h1 align="center"> Meoki The Minimal Portfolio </h1>

<h3 align="center"> A modern one-page portfolio with a clean yet expressive design. </h3>

<p align="center">
  <a href="https://github.com/meokisama/meokisama.github.io/blob/develop/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"/>
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
  <a href="https://twitter.com/intent/follow?screen_name=meokiiii">
    <img src="https://img.shields.io/twitter/follow/meokiiii.svg?label=Follow%20@meokiiii"/>
  </a>
</p>

## About

A minimal design, simple but very awesome.

Thanks to [Konstantin Münster](https://github.com/konstantinmuenster) for the starter.

## Sections

The starter has predefined sections as well as a template that you can use to create new, custom sections.

**The predefined sections are:**

1. About me
2. Interests/Skills
3. Projects
4. Contact me
5. RSS Feed articles
6. Codepen.io pens

## Features

#### 🌛 Dark Mode - Based on user's preferences.

If the user's OS is set to using dark mode, the Gatsby Starter will automatically switch to a dark theme too.

#### 🕹️ Quick and Easy Setup - Add content and deloy.

Just install the starter, add your content, and deploy it! This starter works seamlessly with hosts like Netlify.

#### 📓 Content Integration via MDX - No external CMS needed.

MDX is a Markdown format that allows you to enrich your content with React components. This makes it fully customizable without external dependencies.

#### 🧰 Extendable Layout - Add more sections as you like.

The starter includes predefined sections as well as a template for new, custom sections. Moreover, you can add new projects to the project section without additional coding.

#### 💅 Responsive Design - With freshening animations.

The starter is designed with a mobile-first approach and looks perfect on small and large breakpoints. Moreover, it has some nice and smooth animations.

#### <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/1024px-Generic_Feed-icon.svg.png" alt="RSS Icon" width="15" /> RSS Newsfeed - Features latest articles.

In case you want to follow some articles with RSS, the starter has a easy to RSS feed that allows you to feature your latest articles.

To see all features in action, have a look at the <a href="https://meokisama.github.io/" target="_blank"><strong>live demo</strong></a>.Just install the starter, add your content, and there you go!

## How to Start

With Portfolio Minimal, you get up and running in just a few minutes.

1. **Install the Gatsby CLI.**

   ```
   npm install -g gatsby-cli
   ```

2. **Create a new Gatsby site with the Portfolio Minimal starter.**

   ```
   git clone https://github.com/meokisama/meokisama.github.io.git
   ```

3. **Install dependencies.**

   ```
   cd meokisama.github.io
   npm install
   ```

4. **Start the site in `develop` mode.**

   ```
   gatsby develop
   ```

5. **Open the source code and start editing!**

   Good luck...

## Edit Content

After you installed the starter project, you most likely want to add your own content.

### Edit configuration

First, you want to edit the config file which stores the site's configuration (e.g. title, description) and social profiles.

```
|-- config
    |-- index.js
```

Navigate to the `index.js` file in the config folder, edit the configuration, save it, that's it!

### Edit page content

Next, you can edit the content for each section you want to be displayed. By default, all sections are shown. If you want to remove certain sections from the site, check out <a href="#editing-page-structure">this part of the Readme</a>.

```
|-- content
    |-- imprint
    |-- index
       |-- about
       |-- contact
       ...
    ...
```

You find all content in the content folder (surprisingly). For content integration, the project uses MDX, a Markdown format. If you haven't worked with Markdown or MDX before, check the Markdown syntax in <a href="https://www.gatsbyjs.org/docs/mdx/markdown-syntax/" target="_blank">Gatsby's docs</a>. They also provide <a href="https://www.gatsbyjs.org/docs/mdx/writing-pages/" target="_blank">further information about MDX</a>.

To get up and running, just edit the predefined data fields in each `mdx` file.

## Edit Theme

You find the color and font settings in the configuration file, located at: `config/index.js`.

> Note: The usage of the splash screen can be set for each page individually in the page content directory.

## Edit Page Structure

To remove or reorder predefined sections, navigate to the `src/pages/index.js` file. This is the home page of your site.

Each section (besides the Articles section) exists of an imported React component and a GraphQL query that is needed for data querying.

**If you want to remove a section**, just delete the imported React component and query.

**If you want to reorder your sections**, just reorder the React components inside the `<Layout />` component.

### Add custom sections

If you want to add your own custom sections, there is a section template you can use. You can find it in the following directory: `src/components/templates`

## Find me around the web 🌎:

<a href="https://facebook.com/slytherinnn/"><img align="left" width="150" height="150" src="https://github.com/meokisama/meokisama/blob/master/image/2750554.png"> </a>

- Information in public on <a href="https://meoki.net/">**Blog**</a> ✍🏾
- Sharing updates on <a href="https://facebook.com/slytherinnn/">**Facebook**</a> 💼
- Other products on <a href="https://www.behance.net/meokisama">**Behance**</a> 🏓
- Daily photos on <a href="https://www.instagram.com/hi.im.meoki/">**Instagram**</a> 📷
- "Wibu" collection on <a href="https://www.flickr.com/photos/meokisama/albums">**Flickr**</a> 👾\

## License

Distributed under the [MIT](http://showalicense.com/?fullname=Konstantin+M%C3%BCnster&year=2019#license-mit) license.

See `LICENSE` for more information.

## Changelog

#### [Version 1.3.0] - 17/2/2021

- Add __Creative Coding__ section _(To show pens you made on [codepen.io](https://codepen.io/))_

#### [Version 1.2.2] - 6/1/2021

- Effects now smoother
- Add more E2E Test

#### [Version 1.2.1] - 17/11/2020

- Fix some f\*cking bug

#### [Version 1.2.0] - 16/11/2020

- Add more RSS feed _(Now we have **2**)_

#### [Version 1.1.0] - 3/11/2020

- Update more platform icons \
  _(Behance, Github, Medium, Linkedin, Xing, **Facebook, Twitter**)_

#### [Version 1.0.1] - 28/10/2020

- Fix some bugs
