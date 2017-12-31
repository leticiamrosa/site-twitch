/* ===========================================================
                      WWW.TWITCH.TV/LEMONOOB
                      JAVASCRIPT OF LEMONOOB
 ============================================================ */

 new Twitch.Embed("twitch-embed", {
   width: 854,
   height: 480,
   channel: "lemonoob",

 });

 embed.addEventListener(Twitch.Embed.AUTHENTICATE, function(user) {
   console.log(user.login + ' just logged in');
 });

$('.carousel').carousel();
