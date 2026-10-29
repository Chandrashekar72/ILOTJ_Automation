@merge
Feature: Rule Merge Flow

Scenario: Merge conflicting rules

  Given User is logged in
  When User clicks on Setting button and navigates to Learning Management  
  And User opens Create Scope modal
  And User clicks on Scope type dropdown and selects Genre
  And User enters unqiue Scope name
  And User click on Generate Description
  And User clicks on Create New Scope Button
  And User clicks on Tier level Delete button and Deletes the Tierl rule

  # First Rule
  And User clicks on Add New Learning button
  And User enters separation rule in chatbot
  And User enters Order Separation in chatbot
  And User enters 5min in chatbot
  And User enters Tier 1 in chatbot
  And User enters Apply to Audacy in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters CM in chatbot
   And User verifies RHS for "orderSeparationVariant" rule
  Then User clicks on Save Button


  # Conflicting Rule
  And User clicks on Add New Learning button
  And User enters separation rule in chatbot
  And User enters Order Separation in chatbot
  And User enters 5min in chatbot
  And User enters Tier 1 in chatbot
  And User enters Apply to Verizon in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters LINER in chatbot

  # Merge Flow
  And User clicks on Compare button
  And User enters Merge the rule in chatbot
  And User confirms merge in chatbot

  # Validation
