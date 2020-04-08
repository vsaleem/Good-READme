import { fstat } from "fs";

// Event Listener
eventEmitter.on('generateHTML', (Number, Number2) =>{
    console.log(Number + Number2);
});

eventEmitter.emit('generateHTML', 1,2 );

// Constructor function -- Extend Emitter Class : this a person class
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

// Listener
let lane = new Person('Lane');
lane.on('name', ()=>{
    console.log('my name is ' + lane.name);
});

lane.emit('name');

// create a file
fs.writeFile('example.txt', 'this is an example',(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File created');
        fs.readFile('example.txt', utf8, (err, file) =>{
            if(err)
            console.log(err);
        else 
            console.log(file);
        });
    }
}); 



// BONUS:
    // If Username is blank, catch err and throw response
    // if(response.input === " " );
    //     console.log("Username.");
    // } else { 
    //     prompt.list

    // };


// OKAY, TIME TO GENERATE FILE..... ASYNCRONIOUSLY!
// STEP 3: 
/***/
        // let gitHubApi=await fetch('https://api.gitHubApi.com/users/${answers.username}');
        // gitHubApi=await gitHubApi.json();
        // let getEmail=await fetch('https://api.gitHubApi.com/users/${answers.username}/events/public');
        // getEmail=await getEmail.json();
        // answers.useAvatar = gitHubApi.avatar_url;
        
        // STEP 5: CREATES AND WRITES TO PDF

        // async function writeToFile(__dirname, data){
        //     fs.writeFile(path.join(__dirname, './', 'UserProfile.pdf'), err => {
        //         if (err) throw err;
        //         else {
        //         console.log('User Profile created!');
        //         } 
        //     }







// STEP 4: //CALL generateHTML.js DATA to use for generator: 
    // A .PDF doc will Populate with the following gitHubApi Account info:
    // * Profile image
    // * User name
    // * Links to the following:
        //   * User location via Google Maps
        //   * User GitHub profile
        //   * User blog
    // * User bio
        // * Number of public repositories
        // * Number of followers
        // * Number of GitHub stars
        // * Number of users following

// last part
            // .then (answers) => {
    //     const generate = fs.writeFile('README.md', generate,(err)=>{
    //         if(err)
    //             console.log(err);
    //         else{
    //             console.log('File created');
    //             fs.readFile('README.md', utf8, (err, file) =>{
    //                 if(err)
    //                 console.log(err);
    //             else 
    //                 console.log(file);
    //             });
    //         }
    //     }); 
    // });

    async (userName) => {
        const gitHubApi = 'https://api.github.com/users/${userName.github}';
        response = await axios.get(gitHubApi);
    //     // answers.email = response.data.email;
    //     // answers.pic = response.data.avatar_url;
        return userName;
    }