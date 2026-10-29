@E2E
Feature: Learning Management

Scenario: Create Order + Advertiser rule in same scope

  Given User is logged in
  When User clicks on Setting button and navigates to Learning Management
  And User opens Create Scope modal
  And User clicks on Scope type dropdown and selects Genre
  And User enters unqiue Scope name
  And User click on Generate Description
  And User clicks on Create New Scope Button
  And User clicks on Tier level Delete button and Deletes the Tierl rule

  #   # ✅ Inventory Code RULE (NEW ADDITION)
  Then User clicks on Add New Learning button
  And User enters Inventory Matching rule in chatbot
  And User enters Tier 1 in chatbot
  # And User enters Enable in chatbot
  And User enters Apply Globally in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters CM in chatbot
       And User verifies RHS for "inventorycodeMatching" rule
  Then User clicks on Save Button

  # ✅ ORDER RULE
  Then User clicks on Add New Learning button
  And User enters separation rule in chatbot
  And User enters Order Separation in chatbot
  And User enters 30min in chatbot
  And User enters Tier 1 in chatbot
  And User enters Apply Globally in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters CM in chatbot
   And User verifies RHS for "orderSeparation" rule
  Then User clicks on Save Button

#
#   # ✅ ADVERTISER RULE (NEW ADDITION)
  Then User clicks on Add New Learning button
  And User enters separation rule in chatbot
  And User enters Advertiser Separation in chatbot
  And User enters 30min in chatbot
      And User enters Tier 1 in chatbot

  And User enters Apply Globally in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters CM in chatbot
     And User verifies RHS for "advertiserSeparation" rule
  Then User clicks on Save Button

  


#  # ✅ Break Code RULE (NEW ADDITION)
  Then User clicks on Add New Learning button
  And User enters Breakcode Matching rule in chatbot
  And User enters Tier 1 in chatbot
  And User enters Enable in chatbot
  And User enters Apply Globally in chatbot
  And User enters Yes, add exemption in chatbot
  And User enters CM in chatbot
       And User verifies RHS for "breakcodeMatching" rule
  Then User clicks on Save Button


  #  # ✅ Restrict Placement RULE (NEW ADDITION)
  #  Then User clicks on Add New Learning button
  # And User enters I want to add Learning Description
  # And User enters Restrict placement rule in chatbot
  # And User enters Tier 1 in chatbot
  # And User enters Apply to Audacy in chatbot
  #  And User enters Yes, add exemption in chatbot
  # And User enters CM in chatbot
  #      And User verifies RHS for "restrictPlacement" rule
  # Then User clicks on Save Button


#      # ✅ Spot Placement RULE (NEW ADDITION)
#  # Then User clicks on Add New Learning button
#  # And User enters Tier 1 Spot placement rule in chatbot
#  #  And User enters Apply Globally in chatbot
#  #  And User enters Yes, add exemption in chatbot
#  #  And User enters CM in chatbot
#    #Then User clicks on Save Button

#     # # ✅ Advertiser Pair Placement Restriction (NEW ADDITION)
  # Then User clicks on Add New Learning button
  # And User enters separation rule in chatbot
  # And User enters Advertiser Pair Placement Restriction in chatbot

  # And User enters Apply to Audacy and Kroger in chatbot
  #   And User enters Tier 1 in chatbot
  # And User enters Yes, add exemption in chatbot
  # And User enters CM in chatbot
  # Then User clicks on Save Button







