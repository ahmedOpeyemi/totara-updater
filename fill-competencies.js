const request = require('request')
const competencies = require('./competencies')

// Step 1: Extract the headers and extraData from your curl requests.
const headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Origin': 'https://www.resource-center.org.ng',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://www.resource-center.org.ng/totara/appraisal/myappraisal.php',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cookie': ''
}

// Step 1a: Update your sesskey
const extraData = {
    sesskey: ''
}

let dataString = `
    sesskey=${extraData.sesskey}&
    _qf__appraisal_answer_form=1&
    pageid=418&role=1&
    subjectid=186&appraisalid=80&
    stageid=118&
    action=pages&
    preview=&export=&
    submitaction=saveprogress
`

dataString = dataString.replace(/\s/g, '')

let competenciesString = ``
competencies.forEach(competency => {
    competenciesString = competenciesString.concat(
        `&${competency.scaleValueId}=${competency.rating}&${competency.textValueId}=${competency.comment}`
    )
})

dataString = dataString.concat(competenciesString)

const options = {
    url: 'https://www.resource-center.org.ng/totara/appraisal/myappraisal.php',
    method: 'POST',
    headers: headers,
    body: dataString
}

const callback = (error, response, body) => {
    if (!error && response.statusCode == 303) {
        console.log(response.statusCode)
        console.log('Competencies updated. Refresh appraisal page')
    } else {
        console.error(error, response.statusCode)
        console.log('Whooops!.')
    }
}

// Ideally the page returns a 303, if you get a 200, you might doing something wrong.
request(options, callback);