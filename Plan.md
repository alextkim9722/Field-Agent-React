# Requirements
## Navigation
* Displays a main menu.
    * Currently only displays Agent View Option.
    * Main Agent screen will display a list of agents.

## Display All Agents
* Displays agents in an easy to read format.
* Does not include agent properties.
* Each agent should have an element to edit or delete.

## Adding an Agent
* Option to add is available in the Display All Agents menu.
* Agent data is in HTML form
    * Form creates a new agent and goes to the Display All Agents view.
    * Display all validation errors in the menu.
    * Users may cancel adding and return to the display menu.
* Might require empty aliases, missions, etc in order to satisfy validations.

## Updating an Agent
* There should be a prepopulated database with existing agents.
* Editing must be done through a form that then goes to the Display All Agents view.
* Display all validation errors in the window.
* Users may cancel and return to the display menu.

## Deleting an Agent
* Display the agent summary.
* When deleting and canceling they navigate to the Display all Agents view.

# Technical Requirements
* Use a react app.
* Use fetch for HTTP async.
* No changing the HTTP service or database.
* Use a CSS Framework.

# Components
* [DISPLAY]Display all agents component when page first loads.
    * Use a table that includes appropriate labels for some properties.
        * First name, Last Name
