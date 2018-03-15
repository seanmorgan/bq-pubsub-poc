const BigQuery = require('@google-cloud/bigquery');
process.env.GOOGLE_APPLICATION_CREDENTIALS = './gcp-bigquery.json';

// Creates a client
const bigquery = new BigQuery();

// The SQL query to run
const query = 'select round((1.0* (SELECT COUNT(*) FROM \`seans_awesomesauce.logs\` WHERE httpStatus = 200 )) / (1.0* (SELECT COUNT(*) FROM \`seans_awesomesauce.logs\`))*100, 3) As Availability, (select COUNT(httpStatus) FROM \`seans_awesomesauce.logs\`) As Volume, (select COUNT(httpStatus) FROM \`seans_awesomesauce.logs\` WHERE httpStatus != 200) As Errors, (select ROUND(AVG(responseTime), 3) as Latency FROM \`seans_awesomesauce.logs\`) As Latency';

// Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
const options = {
  query: query,
  useLegacySql: false, // Use standard SQL syntax for queries.
};

function runQuery() {
    // Runs the query
    let result = [];

    bigquery
    .query(options)
    .then(results => {
        const rows = results[0];
        result.push(rows);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });

    setTimeout(function(){
        //do what you need here
        return result;
    }, 10000);

}

module.exports = runQuery;