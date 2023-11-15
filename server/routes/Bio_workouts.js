var express = require('express');
var router = express.Router();

let Workout = require('../models/Bio_workouts');
let WorkoutController = require('../controllers/Bio_workouts')
/* Get route for the Bio Workout list */
// Read Operation
router.get('/', WorkoutController.DislayWorkoutlist);
/* Get route for Add Workout page --> Create */
router.get('/add', WorkoutController.AddWorkout); 
/* Post route for Add Workout page --> Create */
router.post('/add', WorkoutController.ProcessWorkout);
/* Get route for displaying the Edit Workout page --> Update */
router.get('/edit/:id', WorkoutController.EditWorkout);
/* Post route for processing the Edit Workout page --> Update */
router.post('/edit/:id', WorkoutController.ProcessEditWorkout);

router.get('/delete/:id', WorkoutController.getDeleteConfirmation);
/* Get to perform Delete Operation --> Delete Operation */
router.post('/delete/:id', WorkoutController.DeleteWorkout);
 module.exports = router;