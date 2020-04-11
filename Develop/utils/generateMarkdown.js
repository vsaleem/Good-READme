function generateMarkdown(data, followers, location, bioImage) {
  return `
# ${data.title}

## DESCRIPTION

${data.description}


## TABLE OF CONTENTS

* # DESCRIPTION
* # INSTALLATION
* # USAGE
* # LICENSE
* # CONTRIBUTORS
* # TESTS
* # QUESTIONS




## Installation


## Usage


## License


## Contributors


## Tests


## Questions



  * FOLLOW ME ON GITHUB
  ![bioImage](${bioImage}&s=200)

  ![followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
  ![location](https://img.shields.io/badge/Location-${location}-brightpink)
  * GITHUB EMAIL

`;
}

module.exports = generateMarkdown;
