
# Kayak Single Page Application Coding Challenge by Lizzie Lerwill

This Single Page Application was built using React. The page filters 12 airlines based on their Alliance and as an extra feature, includes some destination cards at the bottom for travel inspiration ✈️

## Installation

The page can be run on local host using the 'npm start' command.

## Technology

React was used to create this app and SASS was used for styling, so that variables could be created and reused.

## Requirements

All spacing requirements are met. Font-family is Helvetica Neue. On hover, the airline cards show the alliance (if applicable), phone number and website.

The cards are responsive as specified, with all information remaining visible and centred on smaller screens. As this is a SPA, the page does not reloaded at any stage.

The Alliance filter select the list of Airlines to only show those matching the enabled filter. If none are selected, all cards are shown.

## Testing

Some tests have been implemented using React Testing Library. These are commented out as they are not perfect, but they have been left in the project to demonstrate understanding of the importance of testing. Tests would run using 'yarn test'.

## API

I chose to import the data manually from the API manually as there were not too many data examples needed. With more time, and in a larger application, I would have ensured this was fetched from the API.

## Filter component

I have developed a working filter for the Alliances, but am aware this could be refactored with more time. Ideally the number of checkboxes, and names of the checkboxes, would have been drawn from the data so that if the number of alliances increased, more code would not have to be added manually.
