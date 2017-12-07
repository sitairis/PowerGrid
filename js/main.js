let Consumer = require('../js/consumers/Consumer.js');
let SolarPanel = require('../js/sources/SolarPanel.js');
let PowerStation = require('../js/sources/PowerStation.js');
let PowerLine = require('../js/sources/PowerLine.js');
let Grid = require('../js/Grid.js');


let address1 = 'Минск, ул.Садовая, д.1';
let countOfFlatsInHouse1 = 100;

let address2 = 'Минск, ул.Садовая, д.2';
let countOfFlatsInHouse2 = 200;

let address3 = 'Минск, ул.темная, д.3';
let countOfFlatsInHouse3 = 300;

let address4 = 'Минск, ул.Садовая, д.4';
let countOfFlatsInHouse4 = 400;

let house1 = new Consumer( address1, countOfFlatsInHouse1);
let house2 = new Consumer( address2, countOfFlatsInHouse2);
let house3 = new Consumer( address3, countOfFlatsInHouse3);
let house4 = new Consumer( address4, countOfFlatsInHouse4);

house1.print();
house2.print();
house3.print();
house4.print();



let nameCompany = 'SolarCompany';
let powerOfSolarPanel = (1000/12).toFixed(2);
let typeOfSolarPanel = 'spT1-1';

let solarPanelT1 = new SolarPanel(nameCompany, powerOfSolarPanel, typeOfSolarPanel);
solarPanelT1.print();



let nameOfPowerPlant = 'Электростанция 1';
let powerOfPlant = (90000/24).toFixed(2);
let typeOfPlant = 'гидро';

let powerPlant1 = new PowerStation(nameOfPowerPlant, powerOfPlant, typeOfPlant);
powerPlant1.print();


let powerGrid1 = new PowerLine('pg1', 220, 0.1188);
powerGrid1.print();

let grid = new Grid(0.5611, 365);

grid.powerLines = powerGrid1;

grid.consumers = house1;
grid.consumers = house2;
grid.consumers = house3;
grid.consumers = house4;

grid.powerStations = powerPlant1;
grid.solarPanels = solarPanelT1;

grid.print();