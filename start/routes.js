'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User');
Route.get('/places/:id', 'PlaceController.show');
Route.resource('/places', 'PlaceController').apiOnly();

Route.post('/sessions', 'SessionController.store').validator('Session');

Route.post('/passwords', 'ForgotPasswordController.store').validator('ForgotPassword');
Route.put('/passwords', 'ForgotPasswordController.update').validator('ResetPassword');

Route.post('/files', 'FileController.store');
Route.get('/files/:id', 'FileController.show');


Route.group(() => {
  Route.resource('/requests', 'RequestController').apiOnly()
    .validator(new Map([[['requests.store'], ['Request']]]));

  Route.resource('/requests.schedulings', 'SchedulingController').apiOnly()
    .validator(new Map([[['requests.schedulings.store'], ['Scheduling']]]));

  Route.resource('/requests.services', 'ServiceController').apiOnly()
    .validator(new Map([[['requests.services.store'], ['Service']]]));

  Route.resource('/requests.evaluations', 'EvaluationController').apiOnly();

  Route.resource('/requests.problems', 'ProblemController').apiOnly();

  Route.resource('/users.ratings', 'RatingController').apiOnly();
}).middleware(['auth'])
