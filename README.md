# volunteer
A full-stack Philadelphia Volunteer app matching organizations to volunteers designed using MVC (model view controller) pattern for efficient code reuse.

The app opens to a home page that displays thumbnail 'cards' of current volunteer opportunities and a log-in.  

New users can fill out a form to join Philadelphia Volunteer.  In this form there is a survey to track any special skills needed for the volunteer opportunity, number of hours, date, time, etc.  This way the app can suggest matches between organizations and volunteers.

Existing users can log-in as either an organization or a volunteer. 

If logged in as an organization, the user is taken to a organization page.  The organization can edit thier existing opportunity, check enrollment or to fill out a form to post new volunteer opportunities.

If logged in as a volunteer, the user is taken to an opportunity page where they can look through the all listed opportunities.  Once the volunteer chooses an opportunity to participate in, they can click on the opportunity thumbnail.  The app will then take the user to a form to fill out to sign-up for the activity.

mySQL database is used to keep track of all organizations, volunteers and volunteer opportunities.

Technology:
    Front end:
        HTML
        CSS
        Bootstrap 4.0    
    Back end:
        MySQL database
        MySQL workbench
        npm packages:
            Node.js
            Express npm,
            Express-Handlebars npm
            Body-Parser npm
            Path npm
            Chai npm
            mysql2 npm
            Sequelize npm



