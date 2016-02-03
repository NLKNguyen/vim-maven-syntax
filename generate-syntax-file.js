/**
 * Generate syntax/maven.vim syntax file based on the config file syntax_mapping.yml
 *
 * @author Nguyen Nguyen <NLKNguyen@MSN.com>
 * @origin https://github.com/NLKNguyen/vim-maven-syntax
 * @license MIT
 */
const YAML = require('yamljs');
const _    = require('lodash');
const fs   = require('fs');

const syntaxMapping = YAML.load('syntax_mapping.yml');

const syntaxMatches  = [];
const highlightLinks = [];

_.forOwn(syntaxMapping, (group, name) => {
  const keywords       = group['keywords'].split(/[\s\n]+/).filter(Boolean);
  const highlight_link = group['highlight_link'];

  _.forEach(keywords, (keyword) => {
    syntaxMatches.push(String.raw`syn match ${name} "\(\(<${keyword}\s\)\|\(<\(\(${keyword}/\?\)\|\(/${keyword}\)\)\)>\)"`); 
  });

  highlightLinks.push(`hi link ${name} ${highlight_link}`);
});

////////////////////////////////
// Write to file

const file = fs.createWriteStream('syntax/maven.vim', { flags: 'w'} );

file.on('error', (err) => { /* error handling */ });

file.write(`
" This is an automatically generated syntax file created on ${(new Date()).toUTCString()}
" Origin: https://github.com/NLKNguyen/vim-maven-syntax
`);

_.forEach(syntaxMatches, (line) => {
  file.write(line + '\n'); 
});

_.forEach(highlightLinks, (line) => {
  file.write(line + '\n'); 
});

file.write(String.raw`
syn region mavenString start=/\v"/ skip=/\v\\./ end=/\v"/
hi link mavenString String
syn match xmlEndTag ">"
`);
file.end();
