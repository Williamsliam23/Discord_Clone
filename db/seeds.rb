# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test = User.create([username: "TestUser", email: "testemail@noweb.com", password: "Password1"])

first_message = Message.create([author_id: 2, body: "This is a test message for the application"])