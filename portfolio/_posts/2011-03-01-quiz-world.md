---
cid: quiz-world
layout: portfolio-item
title: Stanford CS108 - Quiz World
num-images: 0
---

### What?

For a class project, I worked on a team of three to create a quiz website. The
objective was to create a website where people can take quizzes. They can also
compare their quiz scores to friends, challenge friends to beat their score, or
write and edit quizzes that other people can take.

*   Designed the visual and interactive frontend with feedback from my teammates
*   Made the site more interactive using jQuery and AJAX
*   Structured part of the database and set up foreign key relationships
*   Wrote the code for quiz questions
*   Wrote most of the JavaServer Pages

### TA Comments

"There was a 20% bonus for the professional quality, design, and thoughtfulness...
Wow. This is the best quiz project I've ever seen. Lots of attention to detail.
You're all ridiculous. I hope you know that."

### Team

Sophia Westwood, Joe Gasperetti, Brie Bunge


{% for i in (1..13) %}
 ![](/public/assets/{{ page.cid }}/{{ i }}.png)
{% endfor %}


### Features implemented:
*   Questions that support multiple answer possibilities. It is possible for a
    quiz creator to specify a number of possible correct responses for fill in
    the blank, question response, and picture response questions
*   Search Functionality - Using the search box at the top right of the page,
    it is possible to search for both users and quizzes.
*   History - It is possible to see a users history in a variety of ways. The
    main section of the user's home page has tabs for "Your Created Quizzes"
    and "Your Recent Quizzes" which show recently created and taken quizzes
    respectively. There is also a dedicated history module on the right hand
    side of the page that slides down to show a more comprehensive history of
    the user's activity.
*   The user home page has all of the required modules
*   Each quiz has a summary page with the required information, including the
    option to edit the quiz if the user made the quiz.
*   Quizzes have all of the required features: Random ordered question option,
    one vs multiple page display, and immediate correction.
*   Quizzes have the optional feature practice mode. In practice mode, a user
    has three chances at the questions. With pagination, the user sees the
    answers to the questions that he or she gets wrong. The wrong questions go
    back into the list of questions and get redisplayed to the user later in
    the quiz.
*   Quiz results show a comparison of the user's past performances on the quiz.
*   Quiz results also show individual feedback on the incorrect questions. The
    user's answers are included in uneditable fields for reference, and the
    correct answers are listed underneath.

    *   We have implemented a prettified custom error 404 page if an invalid
    URL is requested
    *   The form for creating an account uses AJAX to check on blur if the
    username typed is already in use
    *   The form for creating an account performs validation to make sure that
    all fields are full and that the two password fields match.
    *   Nearly every times we use a text field, we have used either javascript
    or CSS3 to display placeholder text that disappears on focus.
    *   The quiz creation and editing pages use JQuery to dynamically add new
    questions to the page without refreshing. The user can also add additional
    possible answers dynamically.
    *   The quiz creation and editing pages validate the form using client-side
    processing, highlighting textboxes left blank and forcing the user to fill
    all fields out.
    *   The quiz creation and editing pages allow the removal of questions and
    answers
    *   We have added an administrative interface (link visibile to admins in
        the header bar) at /admin.jsp that allows for:

        *   Getting statistics about the site:
            *   Number of users
            *   Number of quizzes
            *   Number of times quizzes have been taken
        *   Creating Announcements
        *   Removing Users
        *   Removing Quizzes
        *   Clearing a Quiz's History
        *   Promoting Users to administrator status
        *   Administrating quizzes and users is done through an AJAX powered
        search box that populates a dialog as the user types.

    *   We have changed the Database engine used by the MySql Server so that
    some of our tables can hold metadata about which which keys are foreign
    keys in other tables. This allows changes to one table to cascade to sub
    tables. For example:
      *   If it is necessary to change a quiz's ID, with one query on the quiz
      table that change cascades to all other tables holding quizID as a
      foreign key
      *   Deleting a quiz also deletes all of the questions and responses
associated with that quiz. (Also in one simple query on the quizzes table)
    *   We implemented a history table for tracking quiz usage analytics
    displaying historical performance data
    *   We implemented the optional achievements extension. Users are informed
    after making or taking quizzes whether they have earned a new achievement.
        *   Achievements are shown on the right side of the page.
        *   Achievement that have not yet been earned are greyed out
    *   We implemented quiz editing so that owners of quizzes can edit the
    quizzes they've created. The owners can edit aspects of their quiz such as
    question and answer content, number of questions, description, name, and
    quiz options like pagination, random order, etc. Once the user submits the
    edit form, the quiz retains all of its past history but contains the new
    information.
    *   The login and user creation forms are dynamically validated using AJAX.
    *   Quotation marks are handled gracefully when entered in quizzes and
    notes. We wrote our own code to safeguard user input and make the site much
    more robust.
      *   Whenever possible we preferred to upadate pages asynchonously instead
      of refreshing.
      *   Our largest extension is the look and feel of the website. From CSS3
      styling to AJAX-powered and JQuery-animated elements, this is where we
      had the most fun.
    * No three person features were omitted. In fact, all five person features
    were completed.
