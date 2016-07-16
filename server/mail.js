Meteor.startup(function () {
  smtp = {
    username: 'Student',
    password: '6n1PxNjExLx45cCYzbZ3oA',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});