class Racer {                                //new class Racer made
    constructor(name,position){              //constructor function made, with name and position parameter
        this.name = name;                    
        this.position = position;
    }
    describe(){                              //describe method for driver
        return `${this.name} drives in ${this.position}.`;
    }
}
class Team {                             //Class made for Team
    constructor(name){                   
        this.name = name;
        this.drivers = [];              //array in constructor to collect new drivers
    }
    addDriver(driver) {
        if (driver instanceof Racer) { 
            this.drivers.push(driver);
        } else {
            throw new Error(`You can only add an instance of Driver. Argument is not a driver: ${driver}`); //Error message made 
        }
    }
    describe() {
        return `${this.name} has ${this.drivers.length} driver.`;   //describe method displaying name and postion
    }
}

class Menu {                             //class for Menu
    constructor() {                       //constructor made, no arguments
        this.teams = [];                  //teams has empty array to add new teams
        this.selectedTeam = null;         //set to null because nothing has been added yet
    }

    start() {                             //start method, entry point
        let selection = this.showMainMenuOptions();    //Top Down development approach, show menu options
        while(selection != 0) {                        //While loop to loop through switch
            switch (selection) {                       //Switch statement made for menu options
                case '1': 
                 this.createTeam();                    
                 break;
                case '2':
                 this.viewTeam();
                 break;
                case '3':
                this.deleteTeam();
                 break;
                 case '4':
                this.displayTeam();
                 break;
                 default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();     //Returns to main menu options 
        }

        alert('Goodbye!');              //If 0 is selected 
    }

    showMainMenuOptions(){                //Main menu options, with prompt entry 
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {    //Driver creation and deletion
        return prompt(`
       0) back
       1) create driver
       2) delete driver
       ---------------------
       ${teamInfo}
        `);
    }

    displayTeam(){                 //Display team function       
        let teamString = ``;
        for (let i = 0; i < this.teams.length; i++){
            teamString += i + `)` + this.teams[i].name + `\n`;
        }
        alert(teamString);
    }

    createTeam() {                 //Create team function
        let name = prompt('Enter name for new race team:');
        this.teams.push(new Team(name));
    }
    viewTeam() {                   //View Team function
        let index = prompt('Enter the index of the team you wish to view:');
        if(index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name ' + this.selectedTeam.name + '\n';
            
            for (let i = o; i< this.selectedTeam.players.length; i++) {
                description += i + ')' + this.selectedTeam.players[i].name + ' - ' + this.selectedTeam.drivers[i].position + '\n';
            }
            let selection = this.showMainMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createDriver();
                    break;
                case '2':
                    this.deleteDriver();
            }
        }
    }

    deleteTeam() {                 //Delete team function
        let index = prompt('Enter the index of the team you wish to delete');
        if (index > -1 && index < this.team.length) {
            this.teams.splice(index,1);
        }
    }
    createDriver() {              //Create driver function
        let name = prompt('Enter name for new driver');
        let position = prompt('Enter position for new driver');
        this.selectedTeam.drivers.push( new Driver(name, position));
    }
    deleteDriver() {             //Delete driver function
        let index = prompt('Enter the index of the driver you wish to delete');
        if (index > -1 && index < this.selectedTeam.drivers.length) {
            this.selectedTeam.drivers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();                 //Menu start