const Players =[
    {
FirstName: 'Stephen', 
LastName: 'Curry',
 position: 'PG',
PPG:'29.4', 
APG:'6.3',
RBPG:'6.1',
Stuff:["50", "20", "30"]},

{FirstName: 'Devin',
LastName: 'Booker', position: 'SG',
PPG:'27.8', 
APG:'5.5',
RBPG:'4.5',
Stuff:["10", "40", "60"]},

{FirstName: 'Lebron', 
LastName: 'James', 
position: 'SF', 
PPG:'28.9',
APG:'6.8', 
RBPG:'8.3'},

{FirstName: 'Giannis', 
LastName: 'Antetokonumpo',
 position: 'PF', 
 PPG:'31.1', 
 APG:'5.7',
 RBPG:'11.8'},

{FirstName: 'Nikola',
LastName: 'Jokic',
position: 'C', 
PPG:'24.5',
APG:'9.8',
RBPG:'11.8'}];

Players.forEach((player) => console.log(player.LastName));
Players.forEach((player) => console.log(player.Players));