Feature: Creation of a new rule in the Instant learning mode.

Scenario: Create a new rule in the in the Global scope

Given User is logged in
When the user navigates to instant learning mode 
And searches for the desired ILKB 
And navigates to the LMS screen 
And Creates a new Scope with a unique name and description
And then the user clicks on the Add New Learning button
And user enters the Title of the rule
And enters the Description of the rule
And enters the Duration of the rule
And enters the WTA of the rule
And enters the WNTA of the rule
And user saves the rule
Then the user verifies that the rule is created successfully in the LHS and RHS