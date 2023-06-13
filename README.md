## How to run the project

server:

```bash
cd server/
npm install
node app.js
```

client:

```bash
cd client/
npm install
ng serve
```

## The task:

You have a folder with JSON files on the server side
Each file contains Table information
You need to present to the user the following:

1. List of the files
2. List of tables for the selected file
3. Table information for the selected table

## Example for the JSON file

```json
{
  "tables": [
    {
      "title": "table example title",
      "rows": 5,
      "columns": 2,
      "notes": "table nodes 1"
    },
    {
      "title": "table example title 2",
      "rows": 7,
      "columns": 8,
      "notes": "table nodes text"
    }
  ]
}
```
