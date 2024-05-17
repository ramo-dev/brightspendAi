<body>
  <h1>Financial Management AI with Generative Text Responses</h1>

  <p>This project provides a server-side application that utilizes a financial management AI model to generate informative text responses to user queries related to managing their finances. The model focuses on offering clear, concise advice and occasionally incorporates a touch of lighthearted humor to keep users engaged.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Financial Management Focus:</strong> The AI model is trained on financial management concepts to provide relevant and helpful advice on topics like budgeting, saving money, and expense tracking.</li>
    <li><strong>Generative Text Responses:</strong> The model leverages Google's Generative AI technology to produce creative and informative text responses tailored to user prompts.</li>
    <li><strong>Optional Humor:</strong> The model can be configured to occasionally inject lighthearted humor to make the financial management experience more engaging.</li>
  </ul>

  <h2>Project Setup</h2>

**Clone the Repository:**
     
     git clone https://github.com/ramo-dev/brightspendAi.git
    
**Install Dependencies:** 

     npm install
     
**Environment Variables:** Create a `.env` file in the project root directory 

Inside the .env file, add a line with the following format:

    GEMINI_API=YOUR_GEMINI_API_KEY

Replace YOUR_GEMINI_API with your actual Gemini API key.

**Running the Server:**

  ```bash
  npm start
  ```
  <p>This will run the server with Nodemon, which automatically restarts the server whenever you make changes to the code.</p>

  <h2>Future Enhancements (Not Currently Implemented)</h2>

**LangChain Integration:** 
<p>This project aims to integrate LangChain, a natural language processing library, to enable reading financial data directly from CSV and Excel spreadsheets. This functionality is currently not implemented but is planned for future development.</p>

  <h2>Dependencies</h2>
  <p>This project relies on the following external libraries:</p>
  <ul>
    <li><code>@google/generative-ai</code>: Provides the core functionality for interacting with Google's Generative AI models.</li>
    <li><code>body-parser</code>: Parses incoming request bodies.</li>
    <li><code>cors</code>: Enables Cross-Origin Resource Sharing (CORS) for handling requests from different origins.</li>
    <li><code>dotenv</code>: Loads environment variables from a `.env` file.</li>
    <li><code>express</code>: A popular web framework for building server-side applications.</li>
    <li><code>nodemon</code>: A development utility that automatically restarts the server on code changes.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the ISC License. See the LICENCE file for details.</p>

</body>




