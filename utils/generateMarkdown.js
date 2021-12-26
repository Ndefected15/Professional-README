// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (`${data.licensing[0]}`) {
    return `[![license](https://img.shields.io/badge/license-${data.licensing[0]}-blue)](https://shields.io)`;
  } else if (`${data.licensing[1]}`) {
    return `[![license](https://img.shields.io/badge/license-${data.licensing[1]}-blue)](https://shields.io)`;
  } else if (`${data.licensing[2]}`) {
    return `[![license](https://img.shields.io/badge/license-${data.licensing[2]}-blue)](https://shields.io)`;
  } else if (`${data.licensing[3]}`) {
    return `[![license](https://img.shields.io/badge/license-${data.licensing[3]}-blue)](https://shields.io)`;
  } else {
    return " ";
  }
}

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
  ${renderLicenseBadge()}
  
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
