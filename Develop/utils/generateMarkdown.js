function generateMarkdown(data, followers, location, bioImage) {
  return `
# ${data.title}

## DESCRIPTION

${data.description}


## TABLE OF CONTENTS

*  DESCRIPTION
*  INSTALLATION
*  USAGE
*  LICENSE
*  CONTRIBUTORS
*  TESTS
*  QUESTIONS




## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Tests

${data.test}


## Questions

${data.questions}


  * ### FOLLOW ME ON GITHUB
  ![bioImage](${bioImage}&s=200)

  ![followers](https://img.shields.io/badge/Followers-${followers}-success)
  ![location](https://img.shields.io/badge/Location-${location}-informational)
  * GITHUB EMAIL

`;
}

module.exports = generateMarkdown;
