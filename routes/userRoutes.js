const express = require('express')
const router = express.Router()
const { getAllUsers, CreateNewUser, updateUser, deleteUser } = require('../controllers/usersController')
router.route('/')
  .get(getAllUsers)
  .post(CreateNewUser)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router
