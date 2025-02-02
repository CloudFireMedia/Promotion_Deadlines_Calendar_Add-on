var SCRIPT_NAME = 'Promotion Deadlines Calendar';
var SCRIPT_VERSION = 'v1.4.1';

function onInstall() {
  setupAutomation()
  onOpen()
}

function onOpen(){ 

  var ui = SpreadsheetApp.getUi();

  ui.createMenu("CloudFire")
//    .addItem("Format Sheet", "formatSheet") // TODO - trello.com/c/zBmW3avV
//    .addSeparator()
//    .addItem('Restore Header', 'restoreHeader') // TODO - trello.com/c/nAKilYOB
//    .addItem('Backup Header', 'backupHeader') // TODO - trello.com/c/nAKilYOB
//    .addSeparator()
    .addItem('Enable Automation', 'setupAutomation') 
    .addItem('Disable Automation', 'disableAutomation') 
    .addSeparator()
    .addItem("Check Deadlines", "checkDeadlines")
    .addItem("Check for Errors", "checkTeamSheetsForErrors")
    .addSeparator()
    .addItem("Add row below", "addRowBelow")
    .addItem("Delete row", "deleteRow")
    .addItem("Calculate deadlines", "calculateDeadlines")
    .addItem("New event popup", "newEventPopup")
    .addToUi();
    
} // onOpen()

// Menu items - Formatting
function formatSheet()               {return PDC.formatSheet()}

// Menu items - Tools
function restoreHeader()             {return PDC.restoreHeader()}
function backupHeader()              {return PDC.backupHeader()}

function setupAutomation()           {return PDC.setupAutomation()}
function disableAutomation()         {return PDC.disableAutomation()}

function checkDeadlines()            {return PDC.checkDeadlines()}
function checkTeamSheetsForErrors()  {return PDC.checkTeamSheetsForErrors()}

// Menu items and macros
function addRowBelow()               {return PDC.addRowBelow()}
function deleteRow()                 {return PDC.deleteRow()}
function calculateDeadlines()        {return PDC.calculateDeadlines()}
function newEventPopup()             {return PDC.newEventPopup()}

// Installable Triggers
function dailyTrigger()              {return PDC.dailyTrigger()}

// Simple Triggers
function onEdit(event)               {return PDC.onEdit(event)}

// Client Side 
function fillSponsor()               {return PDC.fillSponsor()}
function fillTier()                  {return PDC.fillTier()}
function processResponse(eventArray) {return PDC.processResponse(eventArray)}