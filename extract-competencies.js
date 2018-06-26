/**
 * Pre-requisite: You have selected all the competencies that you will be reporting for.
 * See steps below:
 */

// Step 1: On your appraisal page. Run this in the console screen.
// Note: Appraisal page URL looks like this: https://www.resource-center.org.ng/totara/appraisal/myappraisal.php?role=1&subjectid=186&appraisalid=80&action=pages&pageid=418
var allCompetencies = []
$('.question-review-item').each(
    function () {
        var question = $(this).find('.totara-question-review-item-title > h3')[0].innerText;
        var scaleValueId = $(this).find('select').attr('name')
        var textValueId = $(this).find('textarea').attr('name')
        allCompetencies.push({
            question,
            scaleValueId,
            textValueId,
            rating: '',
            comment: ''
        })
    }
)
console.log(
    JSON.stringify(allCompetencies)
)

// Step 2: Copy the results and paste into competencies.js file.
// Step 3: Update the fill-competency script with your auth headers and keys,
//         you can get that using: https://curl.trillworks.com/
// Step 4: Update rating and comment, and run the fill-competency script.