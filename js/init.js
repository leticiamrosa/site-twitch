/* ===========================================================
                      WWW.TWITCH.TV/LEMONOOB
                      JAVASCRIPT OF LEMONOOB
 ============================================================ */

 new Twitch.Embed("twitch-embed", {
   width: 1280,
   height: 450,
   channel: "lemonoob",

 });

 embed.addEventListener(Twitch.Embed.AUTHENTICATE, function(user) {
   console.log(user.login + ' just logged in');
 });

$('.carousel').carousel();
