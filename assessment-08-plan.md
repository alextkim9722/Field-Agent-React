# React Field Agent Assessment

## Tasks

_TODO_ Add time estimates to each of the top-level tasks

* [ ] Create a new GitHub repo for this assessment or continue working in the repo from last week's Field Agent API repository (1.0 hour)
  * [ ] **When creating your repo, be sure to add a `.gitignore` file using the GitHub Node template**
  * [ ] Update the README with the contents from this file
  * [ ] Add the instruction team as collaborators

* [ ] Review the requirements (0.5 hour)

* [ ] Identify any research that I need to do (1.0 hour)

### Part 1: Project Setup and Agents List

* [ ] Create a new React project with CRA (create-react-app)
  * [ ] Remove the cruft (refer back to the Components and JSX exercise for instructions)
  * Estimate: 0.5 hour

* [ ] Add Bootstrap to the `public/index.html` file
  * [ ] Add a link to the Bootstrap CSS using the [CDN from the official docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/#css)
  * [ ] Add the [`container` CSS class](https://getbootstrap.com/docs/4.6/layout/overview/#containers) to the `<div id="root"></div>` element
  * Estimate: 0.5 minutes

* [ ] Create `Agents` component (stub)
  * [ ] Update `App` component to render `Agents`
  * [ ] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary
   - Be sure to include buttons that take you to the edit and delete menus next to each entry in the list of Agents
  * Estimate: 1.5 - 2 hours

* [ ] Update `Agents` to render list of agents
  * [ ] Use `fetch` to `GET` a list of agents from the Field Agent API when the component is first loaded
  * [ ] Write JSX to render the agents array
   - Use a table to render the list of agents
   - Diplay first and last name for each agent
  * Estimate: 2 hours 
  

**Make sure that my GitHub repo is updated!**

### Part 2: Add Agent and Delete Agent

* [ ] Create a form to add an agent
  * [ ] Add form JSX
   - Text inputs for each Agent property
   - String firstName;
    String middleName; 
    String lastName; 
    LocalDate dob;
    - how can I ensure that this is a date? 
    int heightInInches; 
    - how can I ensure that this is a number?
    - HTML input type examples to enforce rules: https://www.w3schools.com/html/html_form_input_types.asp
  * [ ] Decide between using individual state variables for input elements or a single object
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create agent object
  * [ ] Use `fetch` to `POST` the new agent's information to the Field Agent API
   - Incorporate logic to return error messages in a list with useState hook
   (see fetch function in the AddToDo component in the ToDos project)
  * [ ] On success, update the agents array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
  - Error messages will be displayed in an HTML element in the Add component 
  * Estimate: 3 hours

* [ ] Support deleting agents
  * [ ] Store the "delete agent ID" in a new state variable
  * [ ] Retrieve the agent to delete
  * [ ] Update form state variable(s)
  * [ ] Add delete confirmation JSX
  * [ ] Add button click handler to perform the delete
  * [ ] Use `fetch` to `DELETE` the agent from the Field Agent API
  * [ ] On success, update the agents array (don't modify the original array!)
  * Estimate: 1.5 hour 

* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
  * Estimate: 1 hour

**Make sure that my GitHub repo is updated!**

### Part 3: Edit Agent

* [ ] Support editing agents
  * [ ] Store the "edit agent ID" in a new state variable
  * [ ] Retrieve the agent to edit
  * [ ] Update form state variable(s)
  * [ ] Add form JSX
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create agent object
  * [ ] Use `fetch` to `PUT` the updated agent's information to the Field Agent API
  * [ ] On success, update the agents array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
  * Estimate: 2 hours

* [ ] Apply Bootstrap styling (as needed)
  * [ ] Update the agents list
  * [ ] Update the add agent form
  * [ ] Update the edit agent form
  * [ ] Update the delete agent confirmation
  * Estimate: 2 hours

* [ ] Use the provided test plan to manually test the application

**Make sure that my GitHub repo is updated!**

## High-Level Requirements

Implement a full CRUD UI for agents.

* Display all agents
* Add an agent
* Update an agent
* Delete an agent

## Technical Requirements

* Use Create React App
* Use `fetch` for async HTTP
* You are not allowed to change the Field Agent HTTP Service or database (unless there's a confirmed bug and your instructor approves)
* Use a CSS framework