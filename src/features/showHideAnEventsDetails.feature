Feature: Show and hide events details
  Scenario: When the app is opened the event details are not visible
    Given the user opens the app
    When the user gets a list of all events
    Then the details for the events should not be visible

  Scenario: When the user clicks on the details button the details should be visible
    Given the user sees a list of the events
    When the user clicks on the details button
    Then the details should be visible

  Scenario: When the user clicks on the details button while the details are shown, the details are hidden
    Given the user sees the details of an event
    When the user clicks on the detais button
    Then the details should not be visible