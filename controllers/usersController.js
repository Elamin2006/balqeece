const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// get all users
// get /users
// Private
const getAllUsers = asyncHandler(async (req, res) => {

})

// create new user
// Post /users
// Private
const CreateNewUser = asyncHandler(async (req, res) => {

})

// update a user
// Patch /users
// Private
const updateUser = asyncHandler(async (req, res) => {

})

// delete a user
// delete /users
// Private
const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
  getAllUsers,
  CreateNewUser,
  updateUser,
  deleteUser
}
