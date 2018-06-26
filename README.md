### Totora Updater
1. Run `npm install` to install dependencies.

2. Use the instructions on [extract-competencies.js](./extract-competencies.js) to extract your competencies object.

3. Fill your competencies (rating and comment) in [competencies.js](./competencies.js)

4. Use the instructions on [fill-competencies.js](./fill-competencies.js) to update authorization headers.

5. Run `node fill-competencies.js` to submit competenties. Watch out for the message:
    ```
    303
    Competencies updated. Refresh appraisal page
    ```

You can do this as many times as you like.
Have fun with this.

DO NOT AUTOGENERATE COMMENTS/PERFORMANCE ANSWERS !!