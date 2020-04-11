function generateMarkdown(data, followers, location, bioImage) {
  return `
# ${data.title}

## DESCRIPTION

${data.description}


## TABLE OF CONTENTS

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)



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


  ### FOLLOW ME ON GITHUB
  ![bioImage](${bioImage}&s=200)
  * ${data.email}

  ![followers](https://img.shields.io/badge/Followers-${followers}-success) 
  
  ![location](https://img.shields.io/badge/Location-${location}-ff69b4) 

   


`;
}

module.exports = generateMarkdown;
