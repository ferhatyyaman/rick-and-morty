 
 # Rick and Morty React App 
 
## Live demo: [ https://vercel.com/ferhatyyamans-projects/rick-and-morty ] ( https://rick-and-morty-zeta-sooty.vercel.app/ ) 
 
 This project is a React application used to display episodes and characters of the TV series Rick and Morty. The application pulls data through the [ Rick and Morty API ] ( https://rickandmortyapi.com/ ) and offers users features such as listing episodes, viewing characters, searching, selecting and managing favorite characters. 
 
 ## Requirements 
 
 - The application should list the data of all episodes as pagination on the main page via [ Episode endpoint of Rick and Morty API ] ( https://rickandmortyapi.com/api/episode ) . 
 - On the section details page, the relevant API endpoint must be used to display information about the selected section. Sample API link: [ https://rickandmortyapi.com/api/episode/8 ] ( https://rickandmortyapi.com/api/episode/8 ) 
 - On the episode details page, the characters in the episode should be listed and the relevant character's information should be displayed by clicking on the characters. Sample API link: [ https://rickandmortyapi.com/api/character/1 ] ( https://rickandmortyapi.com/api/character/1 ) 
 - The page must be searchable. You can search by any character name or characteristics. 
 - Pagination process must be created as a Component and used on all listing pages. 
 
 ## Additional Features 
 
 - Users should be able to choose favorite characters. They can add a maximum of 10 characters as favorites. 
 - The list of favorite characters should be managed using Redux/Toolkit and localStorage. 
 - There should be a "Favorite Characters" page where favorite characters are listed. 
 - There should be a "Delete" button for each character on the "Favorite Characters" page. 
 - When deleting is desired, the user is asked "Are you sure you want to remove the character named… from the favorites?" The question should be asked. 
 - If the user selects "Yes" the character should be removed from favorites and the updated list should be shown. If the "No" option is selected, no action should be taken. 
 
 ## Setup 
 
 1. Clone the repo to your computer. 
 2. Go to the project directory: ` cd rick-and-morty-react-app ` 
 3. Type the following command in terminal or command prompt to install the required dependencies: ` npm install` 
 4. Type the following command in the terminal or command prompt to start the application: ` npm start` 
 
 The application will start running at [ http://localhost:3000 ] ( http://localhost:3000 ) . 
 
