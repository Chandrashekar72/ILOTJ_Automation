import {Given, When, Then} from '@cucumber/cucumber';
import {Page, expect} from '@playwright/test';
import { PageManager } from "../pages/pageManager";
import { RuleCreation } from "../pages/ruleCreationPage";
import { CustomWorld } from "../world/customWorld";
import testData from '../test-data/rules.json'



When('the user navigates to instant learning mode', function () {
  return 'pending';
});

When('searches for the desired ILKB', function () {
  return 'pending';
});

When('navigates to the LMS screen', function () {
  return 'pending';
});

When('Creates a new Scope with a unique name and description', function () {
  return 'pending';
});

When('then the user clicks on the Add New Learning button', function () {
  return 'pending';
});

When('user enters the Title of the rule', function () {
  return 'pending';
});

When('enters the Description of the rule', function () {
  return 'pending';
});

When('enters the Duration of the rule', function () {
  return 'pending';
});

When('enters the WTA of the rule', function () {
  return 'pending';
});

When('enters the WNTA of the rule', function () {
  return 'pending';
});

When('user saves the rule', function () {
  return 'pending';
});

Then('the user verifies that the rule is created successfully in the LHS and RHS', function () {
  return 'pending';
});