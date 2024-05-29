# Task Management API Report

## Approach

### Architectural Pattern
The project follows the Model-Controller-Route (MCR) architecture to ensure a clear separation of concerns:

Models define the structure of the data.
Controllers handle the business logic and interactions with models.
Routes perform HTTP requests to controller methods.

### Technologies Used

Express.js: For building the RESTful API.
JWT (jsonwebtoken): For authentication.
Middleware: For validation and authentication.

## Algorithm Choices

### Sorting
Sorting is implemented using the native JavaScript method. The sort order (ascending or descending) and the field to sort by are specified through query parameters.
ex:- sortBy: title or description or status or priority

### Filtering
Filtering is handled by checking the query parameters and returning tasks that match the specified criteria.

ex:- query parameters:-

status = value
priority = value



### Pagination
Pagination is implemented using query parameters to specify the page number and the number of tasks per page.

query parameters
page = number
limit = number

