// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.install}
  
  ## Usage:
  ${data.usage}
  
  ## License:
  ${data.licensing}
  
  ## Contribution:
  ${data.contribute}
  
  ## Testing:
  ${data.test}
  
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Project Link: `;
}

module.exports = generateMarkdown;
