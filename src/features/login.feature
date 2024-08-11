Feature: Login Functionality

  Scenario Outline: Login with valid and invalid credentials
    Given I launch the application
    When I login with username "<username>" and password "<password>"
    Then I should see the "<expectedOutcome>"

    Examples:
      | username             | password  | expectedOutcome               |
      | bob@example.com      | 10203040  | Welcome message is displayed  |
      | alice@example.com    | 10203040  | Sorry, this user has been locked out. |
      | 1@2.com              | f-o-o     | Provided credentials do not match any user in this service. |
      | bob@example.com      |           | Password is required |
      |                     |           | Username is required |
