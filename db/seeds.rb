# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([username: "TestUser", email: "testemail@noweb.com", password: "Password1"]) #2
User.create([username: "Priam", email: "testemail1@noweb.com", password: "Password1"]) #7
User.create([username: "Achilles", email: "testemail2@noweb.com", password: "Password1"]) #8
User.create([username: "Hector", email: "testemail3@noweb.com", password: "Password1"]) #9
User.create([username: "Paris", email: "testemail4@noweb.com", password: "Password1"]) # 10
User.create([username: "Agamemnon", email: "testemail5@noweb.com", password: "Password1"]) # 11

Message.create([author_id: 11, body: "Troy will fall!"])
Message.create([author_id: 7, body: "Come at me then, we got our walls"])
Message.create([author_id: 9, body: "Paris, can we please give Helen back? Aphrodite kidnapped her"])
Message.create([author_id: 10, body: "Brother I love her!"])
Message.create([author_id: 9, body: "You literally just met her..."])
Message.create([author_id: 11, body: "The Aegeon is mine Priam"])
Message.create([author_id: 7, body: "*yawn* What's that? I can't hear you from up here"])
Message.create([author_id: 11, body: "We'll be back"])
Message.create([author_id: 2, body: "Agamemnon has left the chat"])
Message.create([author_id: 9, body: "That was surprisingly easy"])
Message.create([author_id: 10, body: "Hey look a horse!"])
Message.create([author_id: 7, body: "The gods have given us a gift for defeating the Greeks!"])
Message.create([author_id: 9, body: "Please don't bring that thing inside..."])
Message.create([author_id: 8, body: "Oh, hey there Hector"])
Message.create([author_id: 9, body: "Hey Achilles"])
Message.create([author_id: 9, body: "Oh..."])