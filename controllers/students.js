const db = require('../db/db')

class StudentsController {

    async getStudents(req, res) {

        try {
            const data = await db.select()
                .from('students')
            res.status(201).json(data);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async getStudentById(req, res) {

        try {
            const { id } = req.params;
            const data = await db.select()
                .from('students')
                .where({id})

            res.status(201).json(data);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async addStudent(req, res) {

        try {
            const { firstName, lastName } = req.body;
            const [id] = await db('students').insert({
                first_name: firstName,
                last_name: lastName
            })
            .returning('id');

            res.status(201).json(id);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async updateStudent(req, res) {

        try {
            const { id, firstName, lastName } = req.body;
            
            await db('students')
            .where({ id })
            .update({
              first_name: firstName,
              last_name: lastName
            })

            res.status(201).json("Updated Successfully");
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }    
    
    async deleteStudent(req, res) {

        try {
            const { id } = req.params;
            await db('students')
                .where('id', id)
                .del();

            res.status(201).json("Deleted Successfully");
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    } 

}

module.exports = new StudentsController();