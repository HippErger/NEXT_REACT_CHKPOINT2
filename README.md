# Starter repository for fullstack application using next.js

This is a starter repository created for Austin Coding Academy to quickly
start a fullstack application using next.js

## Installation

Install all dependencies running `yarn`

## Usage

Run the dev server via `yarn start`

### Setup
* X--Create a new repository on github, clone it onto your maching
* X--Download (not clone) the files from the repository https://github.com/AustinCodingAcademy/advanced-nextjs-express-starter and copy them into your new project. Make sure all the files are at the top level. So inside of your folder you should have the .eslint, package.json etc on the very top level
* X--yarn install, yarn start
* X--Donâ€™t use this readme to figure out what code to type
* Use all other projects we have done as code examples
* Pick a real life thing to use as a model. Vehicle, Product, Movie â€¦etc
* Implement 5 properties for this model.

### React
* Create a page as a class based component that list out a collection of your models (ListOfUsers)
    * Use prop types to define what props the component needs
    * It should probably need a prop named after the plural of your model, and it should probably be an array
    * Probably want to map over this array and create some divs or liâ€™s showing 3 of the properties of the item
    * Create a Link on each item so you can navigate to the detail page
    * Create a button on each item so you can delete the item
* Create a page with a class based component that makes a new model (redux fetch practice)
    * Create a form and a button
    * Put a label and an input for each property your model has
    * Bonus - use a drop down if there are a limited number of values for a property
    * Register onChange for each input and use setState to store the information typed in
    * Register onSubmit for the form.
    * onSubmit call an action called createThing(change it to make sense for your model) Remember to connect this via mapDispatchToProps etc.
* Create a page with a class based component that shows details of one thing (UserDetail)
    * Use a prop that has the array of your models
    * Use a parameter from the route path ?id=<id> to find the model to show (See Routing section for more details)
    * Use whatever html you want to show all of the properties of your thing
* Loading data
    * Trigger the loading of data inside componentDidMount of the pages, call loadThings

### Routing
* For the basic routes without variables you can just use the next.js routes that are automatically generated.
* For the routes that need data (for detail / update view the ID of the item for example), read the documentation on routing for Next.js https://github.com/zeit/next.js#routing Play around with the URLs, links and console.log in your own project to figure out how to get the URL parameter into your component.

### Redux
    * First create a minimum working example to setup redux within next.js, refer to example in next.js repository or last lessons video screencast
    * The only state you need is an array of your models
        * state.js
    * Create actions for loading your models and models loaded
        * loadThings() - do a fetch get to â€œ/thingsâ€
        * thingsLoaded(things) - THINGS_LOADED
    * Create an action for saving a new model
        * createThing(thing) - do a fetch post to â€œ/thingsâ€
        * when the fetch is complete, dispatch to loadThings
    * Create an action for deleting an item
        * deleteThing(id) - do a fetch delete to â€œ/things/â€ + id
        * when the fetch is complete, dispatch to loadThings
    * Create reducer for the state
        * care about the action THINGS_LOADED
    * To connect your components to redux, use the withRedux decorator as described in the redux example in next.js repository. If you need to create Containers in components further down in your component tree, create containers as usual.
        * mapStateToProps and mapDispatchToProps
        * The list component container should mapStateToProps for the array of things
        * The list component container should mapDispatchToProps for the deleteThing action
        * The new thing component container should mapDispatchToProps for the saveThingAction
        * The individual pages should mapDispatchToProps for loadThings to get your initial data.

## Server - use advanced-express-practice as an example
* The code for this goes in /src
* Use express to create a server listening on port 3001
* Use mongoose to connect to a MongoDB database called â€œcheckpoint2â€
* Create a Model for your thing
* Create a Route and Controller for your thing
* In the Route, create routes for getting all things, getting one thing by id, deleting one thing, updating one thing, and creating one thing
* In the Controller, create functions for list,show,create,update,remove

## Styling
* Add styling to your components via Style JSX. See documentation of Next.js repository: https://github.com/zeit/next.js#css

## Points
* When I yarn start, the web page loads with no errors - 10pts
* I can navigate to the list and create screen from links - 10pts
* I can enter information into the create screen and click save. If I go back to the list screen, that new information is there. - 20pts
* If I go to the list screen it will show all current existing information - 20pts
* The list screen has a view link for each item. If I click that link the detail screen appears. The details of the item are shown. - 20pts
* If I click the delete button on the list, the item I clicked will be removed from the list - 20pts


## Extra Credit
* Edit Component
  * Create a component to edit your things. It will be almost the same as the create component.
  * Use a prop that has the array of your models
  * Use a parameter from the route path ?id=<id> to find the model to show
  * Populate the properties of the model into the inputs
  * onSubmit populate the information from state back into the model, call a prop function called updateThing(thing)
* Create a container for the edit component
  * mapsStateToProps for the array of models
  * mapDispatchToProps for an action updateThing
* Create an action updateThing(thing)
  * do a fetch put to "/things/" + thing._id
  * when the fetch is complete, dispatch to loadThings
* Add a page to the edit container with a variable ?id=<id>
* In the list components, add a Link for the edit route.

## Bonus
* Create the edit component by reusing the create component

<!--  
https://www.youtube.com/watch?v=LaP1W7VDClg
Ivo- app video
intro: 0:00 - 1:40
Setup 1:40 - 2:10
GitNewRepo 2:10
  cut out mistakes at 5:10ish
StartWithBackend 6:50
Build folders 7:40
First Router 8:20
PostManTest 14:30
RouterCommit 16:26
CreateControllerFile 16:55 (18:00)
CreateModel 26:20
OpenRoboMongo 28:11
AddMongoose 29:10
BackToCreatingModel 33:55
SchemaValidation 34:25
  --add in change for lenght to length
ImplementModelinController 43:55
BodyParser 46:00
MongooseValidation Errors 51:30
FixErrorDetection 55:49
MongooseGlobalPromis 59:35
ErrorHandlingMiddleware 60:00
TimeZone  1:07:30


-->

<!--
class VehiclesPage extends Component {
  constuctor() {
    super();
    this.state = {
      vehicle: 0
    };
  }
// http://localhost:3001/api/vehicles
  componentDidMount() {
  //   VehiclesPage.getInitialProps = async ({ request }) => {
  //     const response = await fetch('https://localhost:3001/api/vehicles');
  //     const json = await response.json();
  //     return {
  //       vehicle: json.vehicles
  //     };
  //   };
  }

  render() {
    if (!this.state.vehicle) {
      return (
        <div>
          <Header />
          <h4>No vehicles found</h4>
          <VehiclesContainer />
          <Link href="/">
            <button>Home</button>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h4>{this.state.vehicle.make}</h4>
        <ul>
          <li>{this.state.vehicle.model}</li>
          <li>{this.state.vehicle.year}</li>
          <li>{this.state.vehicle.miles}</li>
          <li>{this.state.vehicle.price}</li>
        </ul>
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default withRedux(initStore, null, null)(VehiclesPage);

/*
const Page = ({ stars }) => <div>Next stars: {stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
*/
 -->

##NOTES ON LAST DAY OF CLASS
*Skills to learn
  *Keep learning as fast as you can
  *Take a job to learn more not to make more money
  *After 3 years of work you probably have enough money so just go for another job to learn more
  *If you stay longer you can just start a side project or work as a contractor for 9 months a years
  *Work with good people to learn more from
  *Find a job the pays you to code!!
  *Add Ivo on LinkedIn Ivo Mießner

*Technologies
  *Focus on fundamentals of programming
  *Learn software design patterns
  *The gang of 5 -
  *Design Pattern, Element of Reusable object-oriented software
    what is an abstract, ... ... ... ..
    *Also, find the patterns online
  * Pramp, find code fighting apps or websites
  * spend 70% writing code and 30% on researching
  * Look for small agencies that just build websites
  * Learn another programming language - python, php, ruby,
  * Machine learning - python
  * Ruby - learn to build an apps
  * Learn a strongly typed language - not like Javascript
    * define what type the variable will be before you assign it
      *Golang
      *Elm - i good way to get used to an object-oriented language, elegant, really friendly debugger
      *Model-view-update
  *Type script - adds strong typing to your Javascript,
  *or Check out Facebook's Flow for this
  *Learn about different software architectures
    *STACKSHARE - This is where FB, AirBNB share all of their frameworks
  *Learn Fundamentals of Architecture

  *____________ a person explain functional programming really well
  *Redux and all of its decorators will make more sense

  *Take on low pay or free websites with comfortable deadlines that I also kinda know how to do but will learn more to figure out the rest of the problems.

in the interview
  *Ask employers how they allow you learn more as a programmer
  *You don't need to know how to do everything, you just need to know how to figure it out
  *They want to learn how you learn to solve problems
  *Tell them your approach
  *Find the structured way of solving problems

  Find all the things I need to learn about CS

  Algorithm and data structures
    - Can help but really lowdash provides all of these.

  Learn exactly how Javascript works.

  *Really Important - Don't go mental while programming - its unique.
  *Very common burnout
    *EXERCISE!!!
    *Release the stress
    *Look for standup desk
    *Practice in meditation
    *This work on the computer really has side effects
    *it has constant stress!!! and without Release
    *Do the exercise first and coding second -
    *Really focus on diet and exercise before Coding


  Before building
    *Gather all the features First
    *Create a concrete Scope
    *Layout the plan for the project
    *Break it down into smaller parts
    *Figure out all of the things you'll needs
    *List which parts will come first based on dependencies
    *Create issues on Github for these

  UX/UI
    *Designers give specs in a drawing
    *Developers put that into
    *

  Protocol for fetching data
    GraphedUL - this is how facebook does its data fetching
    Really look up what the big companies are using to learn the best Technologies

  Fields to get into
    *Big data
      *Data stores
      *Data structures

  Machine learning
    *AI
    *Higher

  React-native - looks the same

  React-VR - build VR with React!!

  Small project good practice:
    Look for ones that are used by people
    Build clones -
      Reddit clone
      Netflix clone
      Twitter clone
      Build for fame or freelancer

  elance
  freelancer
  codefor.cash $12/month for ACA students

  June 30th Main Floor @ 5:30; with VR - 7-8 presentations

  SPAs
  Slower
  Bots can't read it to help with search engines


  Zac's suggestions
  *go to github -
    find bugs, try to fix it, make a proper issue ticket for bugs
    Submit FAQs

  *  Learn how computers work - just the fundamentals help learn and think about how to programming
  * Suse or Ubuntu - put on a spare laptop or

    Docker, creates virtual machines
    Create a free AWS account
    Learn how to log into it via ssh
    Mess with Linux
    Get an app of mine going in AWS

    Install Archlinux.org - This will help you learn the command LinkedIn
    But do suse or unbunto first to learn Linux
    solstice is an up an coming one.

    Learn VIM -
      Learn VIM - check out Zac's suggestions,
      tmux

    Emac keybindings

    do not type psudo -

    -rf is a force

    Setup a linux machine on AWS for free and play with command line
        use the cheatsheets  files.fosswire.com/2007/08/fwunixef.pdf
