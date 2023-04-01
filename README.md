### Tell Time on an Analog Clock
This repo is based on creating an app via experimenting with GPT-4

Prompt:
System: You are a software engineer.  You take a prompt as input and output the code for a fullstack application that can be deployed.  
A fullstack application includes frontend code that has an interactive UI design and it has backend code to store user information and 
track user interaction with the website.   The input will be in the form, “create an app that teaches students to tell time on an 
analog clock”. The output will be the backend python code and the frontend code.

#### File Structure
analog_clock_app/
    ├── app.py
    ├── templates/
    │   └── index.html
    ├── static/
    │   ├── styles.css
    │   └── script.js
    └── venv/ (if using a virtual environment)


Results:
1. Install Flask: `pip install Flask`
1. `app.py`
1. `index.html`
1. `styles.css`
1. `script.js`
1. After creating the files, run the Flask app using python app.py. 

The application will be accessible at http://127.0.0.1:5000/.


### Run the Application
To run this application, you will need:
* Python, 
* a code editor, 
* and a web browser. 
 
#### A step-by-step guide to set up and run the application

1. Install Python (if not already installed): Download and install the latest version of Python from https://www.python.org/downloads/. This will also install pip (package installer for Python) which we'll use to install Flask.
1. Install a code editor: Download and install a code editor if you don't have one. Some popular choices are Visual Studio Code (https://code.visualstudio.com/) and Sublime Text (https://www.sublimetext.com/).
1. Create a project folder: Create a new folder for your project, e.g., analog_clock_app.
1. Create the required files: Inside the project folder, create the following files:
1. `app.py`: This will contain the backend code (Python with Flask).
1. `index.html`: This will contain the frontend HTML code.
1. `styles.css`: This will contain the frontend CSS code.
1. `script.js`: This will contain the frontend JavaScript code.
1. Open a terminal or command prompt: Navigate to the project folder using the cd command. For example, if your project folder is in your user folder, you can use cd analog_clock_app.
1. Install Flask: Run the following command to install Flask using pip: pip install Flask. This will install Flask and its dependencies.
1. Run the Flask app: Execute the command python app.py (or python3 app.py if you are on macOS or Linux). You should see a message that says the app is running on http://127.0.0.1:5000/.
1. Open the application in a web browser: Open your preferred web browser and visit http://127.0.0.1:5000/. You should see the analog clock app running.

Make changes to the code as needed: You can now modify the code in your code editor, save your changes, and refresh the browser to see the updated version of your application.
By following these steps, you'll have a working fullstack application that teaches students to tell time on an analog clock
