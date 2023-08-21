# meet

A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## User stories:

● As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

● As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.

● As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

● As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

● As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

● As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Scenarios (Gherkin):

Scenario 1  
When user hasn’t searched for a specific city, show upcoming events from all cities.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** user hasn’t searched for any city;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** the user opens the app;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** the user should see a list of upcoming events.  
    
Scenario 2  
User should see a list of suggestions when they search for a city.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** the main page is open;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** user starts typing in the city textbox;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.  
    
Scenario 3  
User can select a city from the suggested list.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** the user selects a city (e.g., “Berlin, Germany”) from the list;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.  
    
Scenario 4  
When offline, the user should see the events from the last time the user was online.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** user is offline;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** the user opens the app;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** the user should see a list of upcoming events from the last time the user was online.  
    
Scenario 5  
User should be able to add a shortcut of the app to the home screen.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** the app is closed;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** user wants to start the app;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** the user should find a shortcut on the home screen.  
    
Scenario 6  
User should see a chart of the upcoming events sorted by cities.  
&nbsp;&nbsp;&nbsp;&nbsp;● **Given** the main page is open;  
&nbsp;&nbsp;&nbsp;&nbsp;● **When** the user wants to see the upcoming events sorted by cities;  
&nbsp;&nbsp;&nbsp;&nbsp;● **Then** the user should see a chart with the upcoming events in each city.  
