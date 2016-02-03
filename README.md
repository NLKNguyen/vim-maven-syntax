Maven Syntax Plugin for Vim
--------

Screenshot (theme: [PaperColor](https://github.com/NLKNguyen/papercolor-theme))
![pom.xml](https://cloud.githubusercontent.com/assets/4667129/12771709/25287600-c9e0-11e5-8f6e-c30108b01b3c.PNG)

This plugin provides **Apache Maven** syntax highlighting on top of XML.

# Installation

Copy `syntax` and `ftdetect` folders into your `~/.vim/` (or `vimfiles/` on Windows)

Or simply use a plugin manager like [Vundle](https://github.com/VundleVim/Vundle.vim) (recommended for easy `:PluginUpdate`):

    Plugin 'NLKNguyen/vim-maven-syntax'

# Usage

Manually: `:set filetype=xml.maven`

Automatically: `pom.xml` file is detected to automatically set the filetype as above.


# Contribution

The `syntax/maven.vim` file is auto generated by a small Node.js script ([generate-syntax-file.js](https://github.com/NLKNguyen/vim-maven-syntax/blob/master/generate-syntax-file.js)) based on the syntax mapping rules declared in a YAML config file ([syntax_mapping.yml](https://github.com/NLKNguyen/vim-maven-syntax/blob/master/syntax_mapping.yml))

Adding or changing the list of Maven tag names can be done simply by modifying the YAML file then rerunning the Node.js script to generate a new syntax file.

### Build Instruction

Install dependencies with [Node.js Package Manager](https://www.npmjs.com/):

```
$ npm install
```

After modifying the YAML file, run this to generate a new syntax file:

```
$ node generate-syntax-file.js
```

# More information

Story behind the project: [Maven Syntax Highlighting Plugin for Vim](http://nlknguyen.com/2016/02/03/maven-syntax-highlighting-plugin-for-vim)

Suggestions/Wishes/Questions/Comments are welcome via [Github issues](https://github.com/NLKNguyen/vim-maven-syntax/issues) or via the blog above.

# License MIT
Copyright 2016 Nguyen Nguyen

