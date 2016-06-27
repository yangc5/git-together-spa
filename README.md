This git-together is to build out an application that coordinates people working in group projects. It'd work like this:

1. Users Registration, sign in, sign out. (As a final step, use Oauth to enable users to authenticate via Github.)

2. Users can opt-in to being available for a group project (the project is agnostic - they are saying they are available, not for a specific project, but to be grouped into a project). When they do this, they get added to a queue of available students.

3. Once their are 3 available students, they should be sent an invite to join a Group (you can use an in-app notification when they next load a page or just send them an email using AR). Once 3 people accept this invite, they group is closed.

4. Once a group is closed, the people in the group can create a project for their group, listing the repo, project details, etc). They can also say the project is done.

5. Have a page to show projects in progress and completed.
