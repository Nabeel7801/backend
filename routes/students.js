const StudentsController = require("../controllers/students")

const express = require('express');
const router = express.Router();

router.get('/getStudents', StudentsController.getStudents)

router.get('/getStudentById/:id', StudentsController.getStudentById)

router.post('/addStudent', StudentsController.addStudent)

router.post('/updateStudent', StudentsController.updateStudent)

router.delete('/deleteStudent/:id', StudentsController.deleteStudent)

module.exports = router;