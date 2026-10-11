# AI Knowledge Hub

An application built with **Angular and Node.js** to help users find information in uploaded spreadsheets and documents. The project will begin with file uploads and keyword search, then introduce AI-powered questions and answers with source references.

The goal is to turn scattered information into a searchable knowledge hub where users can understand answers and trace them back to the original content.

## Planned Features

- **File upload:** Import spreadsheets, with document support added later.
- **Data preview:** View imported spreadsheet records in a table.
- **Keyword search:** Find relevant records across uploaded content.
- **AI questions and answers:** Ask questions in everyday language.
- **Source references:** Identify the file, sheet, row, or document location supporting an answer.
- **Persistent storage:** Keep imported information available between sessions.

## Technology Stack

| Technology | Role |
|---|---|
| Angular | User interface for uploads, search, and answers |
| Node.js | Backend processing, file handling, and search |
| REST APIs | Communication between the frontend and backend |
| Database — to be selected | Storage for extracted content and source details |
| AI API — to be selected | Answer generation using retrieved information |

## How It Will Work

1. A user uploads a file through the Angular interface.
2. The Node.js backend validates the file and extracts its content.
3. The content is stored alongside its source details.
4. The user searches for keywords or asks a question.
5. The backend retrieves relevant information.
6. For AI questions, the retrieved information is supplied to an AI model.
7. The interface displays the results or answer with source references.

## Example Use Case

Upload a project spreadsheet and ask:

> Which projects are in progress, and who owns them?

The hub will retrieve the relevant records and present an answer with references to the spreadsheet rows.

## Development Roadmap

- Build the Angular interface.
- Create and connect the Node.js API.
- Implement spreadsheet upload and preview.
- Add database storage and keyword search.
- Integrate AI answers with source references.
- Extend support to documents.
- Add authentication and file access permissions.

## Project Status

Early development. Built incrementally as a hands-on project for learning Angular, Node.js, API development, and AI integration.
