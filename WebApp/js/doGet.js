//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the app, 
//responding to get requests with query strings as appropriate to dish out
//new pages.
//*********************************************************************************

function doGet(e) {
    var template, tName;
    tName = "Idaho Speedgolf Championship";
    if (e.parameter.player) { //player scoring
      template = HtmlService.createTemplateFromFile('html/PlayerScore-Starter');
      template.data = {playerId: e.parameter.player};
      return template
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle("Score for " + e.parameter.player)
    } if (e.parameter.page) { //show leaderboard under constructino page
      return HtmlService.createHtmlOutputFromFile('html/LeaderboardUnderConstruction')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setTitle("SpeedScore LIVE Leaderboard")
    } else { //login page
      template = HtmlService.createTemplateFromFile('html/LoginUI');
      return template
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle("Welcome to Canine I/O")
    }
  }
    
   //include: Allows us to include files using templated HTML, per Google's best practices 
  //(https://developers.google.com/apps-script/guides/html/best-practices)
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }     
  
  