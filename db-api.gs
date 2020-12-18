const doPost = (request) => {
  // Get JSON Data
  const jsonData = JSON.parse(request.postData.contents);
  // Convert JSON Data to Array
  columns = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen' ];
  values = [ Date.now().toString() ];
  for (i = 0; i < columns.length; i++) {
    values.push(jsonData[columns[i]]);
  }
  // Get Responses Sheet
  var spreadsheet = SpreadsheetApp.openById("1iIsJku-WU7J2JedGfExPC18SqLQebwBxFYrbma82g_o");
  var sheet = spreadsheet.getSheetByName("responses");
  // Set Values in Responses Sheet
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, values.length).setValues([values]);
  // Send HTTP Response
  return ContentService.createTextOutput("200 OK");
};

const doGet = () => {
  // Get Aggregate Sheet
  var spreadsheet = SpreadsheetApp.openById("1iIsJku-WU7J2JedGfExPC18SqLQebwBxFYrbma82g_o");
  var sheet = spreadsheet.getSheetByName("aggregate");
  // Get 2D List Data
  var values = sheet.getRange(1, 1, 14, 13).getValues();
  // Convert 2D List Data to JSON
  json = {}
  questions = []
  json.total = values[1][1]
  for (i = 2; i < values.length; i++) {
    question = {}
    for (j = 1; j < values[i].length; j++) {
      question[values[0][j]] = values[i][j]
    }
    questions.push(question)
  }
  json.questions = questions
  console.log(json)
  // Send HTTP Response
  return ContentService.createTextOutput(JSON.stringify(json))
}
