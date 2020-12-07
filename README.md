# calorie-tracker-app
Project to learn react and springboot

Bugs in calorie tracker application:

1. A component when refreshed errors out because the props it receives from its parent container are no more available

2. When you try to add/update/delete calorie  when there are no users in the app, then the app errors out because the calorie manipulation pages uses userId which is not available.

3. There are no custom login page as of now, due to this and user can only be signed up by the admin

TODO:
1. User signup process (I don't know how to do this ?!!! )

2. View tabs according to the role of the user, what you can see now is strictly an admin view (I don't know how to do this ?!!! )

3. Logout option (Probably can implement this !)

4. Display pie chart showing the percentage of snack, breakfast, lunch and dinner in a month, day, year by a user. (Will implement this) (DONE)

5. Update date in UI to not show the millisecond and display in IST format

6. The latest users and calories should always come up  no matter which tab you click, right now it doesn't happen.

DONE:
1. spring security provided login page.

TAKEAWAY: Need to work on this after learning spring security, local storage in react.

