# Test-issue-tracker-Frontend

Project to test Vite + React as a frontend application for [**issue-tracker**][issue-tracker-link]  
The only url available is `/profiles/<id>`

## Prerequisites

Before installing dependencies using `npm install`, ensure the following prerequisites are met:

- **Node.js** (version 22 or higher recommended)  
  You can check your installed version with:
    ```bash
    node -v
    ```
- **npm** (Node Package Manager, comes with Node.js)  
	Check the version with:
  	```bash
	npm -v
    ```
  If Node.js and npm are not installed, download and install them from https://nodejs.org.

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/LegenGiga/Test-issue-tracker-Frontend
   cd Test-issue-tracker-Frontend
   ```
2. **Install the dependencies**  
    ```bash
    npm install
    ```  
    or use the shorthand
    ```bash
    npm i
    ``` 
Now you have everything setup to start development.
## Developing
### Environment variables
The project needs, at least, these environment variables to be able to function:
- `VITE_API_URL` The base URL where issue-tracker is located.
- `VITE_ADMIN_API_KEY` The Api-Key of the **admin** in **issue-tracker**
  
Those can be set in a local .env file 

### Run the development server
To run it:
```bash
npm run dev
```
It will usually host it at `http://localhost:5137`.
#### **Beware**  
> In [**issue-tracker**][issue-tracker-link], it is specified at `issue_tracker/settings.py` domains are enabled for CORS at `CORS_ALLOWED_ORIGINS`. If the development server isn't in one of those domains, you can set it like this:
> ```bash
>npx vite --port <port> --host <host>
> ```

### Managing Dependencies
You can install a new package or library with:
```bash
npm i <name-of-the-package>
```

[issue-tracker-link]: https://github.com/it21a-Issue-Tracker-ASW/issue_tracker