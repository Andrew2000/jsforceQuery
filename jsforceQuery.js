var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});
conn.login('INSERT USERNAME', 'INSERT PASSWORD+ SECURITY TOKEN', function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
  var records = [];
  conn.query("SELECT Id, Name FROM Account", function(err, result) {
  if (err) { return console.error(err); }
  records = result;
  console.log("total : " + result.totalSize);
  console.log("fetched : " + result.records.length);
  console.log(records);
});
});

