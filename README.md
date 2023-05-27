# DuckDuckgo

1. Please note that the api of DuckDuck go is not bringing all the results as in the website, but it brings mostly official sites.

- You can check it with 'Zelensky' as a search term vs. 'Churchil' - for Churchil there are no search results.
  You can read about this more here: https://www.postman.com/api-evangelist/workspace/duckduckgo/documentation/35240-481ee746-ec7c-4a96-978f-fec051e294d0

I've added the 'skip_disambig' in the query string as it added more results for search terms that didn't had none before, like "Israel".

2. In order to run the app, please first install the package.json in both frontend and backend with the command 'npm i/npm install'.

3. In order to run the server you can either run 'nodemone' or 'node server.js'

4. In order to run the frontend please run 'npm run start'.

5. There are two inputs, the one on the upper right side is for marking and counting strings you are looking for.
   The one in the middle next to the execute button is to do the actual search and call to the API.

6. On the left side you can see all the history searches, I've added the search term as most of the sites has the same title: "Official Site".
