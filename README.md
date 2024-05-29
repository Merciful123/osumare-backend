Base URL: -   http://localhost:5000

1: -  Authentication

Login URL: /login

Method: POST
Description: Authenticates a user and returns a JWT token.

Request Body: username  and password

Response:  accessToken: access_token

Response: status code 200 

after failure
Response: status code 401, invalid credential



2: -  Get All Tasks

URL: /api/tasks
Method: GET
Description: Retrieves a list of tasks.
Headers: Authorization: Bearer <access_token>



Pagination, Filtering, Sorting :- 

Pagination:- 

Query Parameters:- page: number,    limit: number

Results:- gives the data of the specified parameters 




Filtering:- 

Query Parameters:- status,    priority

Results: - Filters based on status and priority




Sorting:-

Query Parameters:-   sortBy: title, description, status, priority

Results: sorts data in ascending order



Response: Retrieves a list of tasks.

Response: status code 200

after failure
Response: unauthorized


3: - Get Task by ID

URL: /api/tasks/:id

Method: GET

Description: Retrieves a specific task by its ID.

Headers:
Authorization: Bearer <access_token>
Response: single task object.

Response: status code 200

after failure
Response: status code 404, task not found



4: - Create a New Task

URL: /api/tasks

Method: POST

Description: Creates a new task.

Headers:
Authorization: Bearer <access_token>
Request Body: title, description

Response: Creates a task object

Response: status code 201 

after failure
Response: status code 400, all fields are required



5: - Update an Existing Task

URL: /api/tasks/:id

Method: PUT

Description: Updates an existing task by its ID.

Headers:
Authorization: Bearer <access_token>
Request Body: title, description

Response: Return the updated task object

Response: status code 200

after failure
Response: status code 404, task not found



6: - Delete a Task

URL: /api/tasks/:id

Method: DELETE

Description: Deletes a task by its ID.

Headers:
Authorization: Bearer <access_token>

Response: status code 204 No Content

after failure
Response: status code 404, task not found


