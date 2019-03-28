//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the app, 
//responding to get requests with query strings as appropriate to dish out
//new pages.
//*********************************************************************************

function doGet(e) {
  var template, faviconUrl, tName;
  faviconUrl = "https://zxqbug.bn.files.1drv.com/y4mHkrhV62YcBzQfBS3Tso5iSTELyIYicuJAp8_x6M-BJfXhrpbrLGXorCS1asKFcLdZG0xcRMjLnJuzcRJoQUIegklSal8uOkMuMGkjHSytYI5xkjPmHpNQwlfoS4_rhMriF_Ow1ucxopjA2oLNyBhUAV4XGuPRj0CF7c-KWVblh9qtakZH6-ewknl4BtzR5Uvxv2zBXy6SMUl22pANI7hHA?width=500&height=500&cropmode=none"
  tName = "Idaho Speedgolf Championship";
  if (e.parameter.player) { //player scoring
    template = HtmlService.createTemplateFromFile('html/PlayerScore-Starter');
    template.data = {player: e.parameter.player, playerId: e.parameter.playerId};
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Score for " + e.parameter.player)
    .setFaviconUrl(faviconUrl);
  } if (e.parameter.page == "Welcome") { //show leaderboard under constructino page
    return HtmlService.createHtmlOutputFromFile('html/Welcome')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle("Welcome");
  } else if (e.parameter.page == "Door") {
    return HtmlService.createHtmlOutputFromFile('html/Door')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Door");
  } else if (e.parameter.page == "Applicator") {
    return HtmlService.createHtmlOutputFromFile('html/Applicator')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Applicator");
  } else { //login page
    template = HtmlService.createTemplateFromFile('html/LoginUI');
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Paws and Claws");
  }
}
  
 //include: Allows us to include files using templated HTML, per Google's best practices 
//(https://developers.google.com/apps-script/guides/html/best-practices)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}  
  