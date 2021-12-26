// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  //for (var i = 0; i < license.length; i++) {}

  var s = "";
  license.forEach(function (item) {
    s += `[![license](https://img.shields.io/badge/license-${item}-blue)](https://shields.io) `;
    console.log(`s is now: ${s}`);
  });
  return s;
  // if (`${license[0]}`) {
  //   return `[![license](https://img.shields.io/badge/license-${license[0]}-blue)](https://shields.io)`;
  // } else if (`${license[1]}`) {
  //   return `[![license](https://img.shields.io/badge/license-${license[1]}-blue)](https://shields.io)`;
  // } else if (`${license[2]}`) {
  //   return `[![license](https://img.shields.io/badge/license-${license[2]}-blue)](https://shields.io)`;
  // } else if (`${license[3]}`) {
  //   return `[![license](https://img.shields.io/badge/license-${license[3]}-blue)](https://shields.io)`;
  // } else {
  //   return " ";
  // }
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
  ${renderLicenseBadge(data.licensing)}
  
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
  ${data.licensing}\n
  
  ## Contribution:
  ${data.contribute}
  
  ## Testing:
  ${data.test}
  
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - email: ${data.email}

    Send me an Email for more questions about this project!
  `;
}

module.exports = generateMarkdown;
