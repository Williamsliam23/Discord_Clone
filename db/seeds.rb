# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([username: "Demo User", email: "Demo@dischannel.com", password: "DemoProductPassword"]) #1
User.create([username: "Priam", email: "testemail1@noweb.com", password: "Password1"]) #7
User.create([username: "Achilles", email: "testemail2@noweb.com", password: "Password1"]) #8
User.create([username: "Hector", email: "testemail3@noweb.com", password: "Password1"]) #9
User.create([username: "Paris", email: "testemail4@noweb.com", password: "Password1"]) # 10
User.create([username: "Agamemnon", email: "testemail5@noweb.com", password: "Password1"]) # 11

Server.create([title: "First Server", creator_id: 1])
Server.create([title: "Second Server", creator_id: 1])
Server.create([title: "Third Server", creator_id: 1])

Channel.create([title: "First Channel", author_id: 1, server_id: 1])
Channel.create([title: "Second Channel", author_id: 1, server_id: 1])
Channel.create([title: "Third Channel", author_id: 1, server_id: 1])

Message.create([author_id: 6, body: "Troy will fall!", channel_id: 1])
Message.create([author_id: 2, body: "Come at me then, we got our walls", channel_id: 1])
Message.create([author_id: 4, body: "Paris, can we please give Helen back? Aphrodite kidnapped her", channel_id: 1])
Message.create([author_id: 5, body: "Brother I love her!", channel_id: 1])
Message.create([author_id: 4, body: "You literally just met her...", channel_id: 1])
Message.create([author_id: 6, body: "The Aegeon is mine Priam", channel_id: 1])
Message.create([author_id: 2, body: "*yawn* What's that? I can't hear you from up here", channel_id: 1])
Message.create([author_id: 6, body: "We'll be back", channel_id: 1])
Message.create([author_id: 1, body: "Agamemnon has left the chat", channel_id: 1])
Message.create([author_id: 4, body: "That was surprisingly easy", channel_id: 1])
Message.create([author_id: 5, body: "Hey look a horse!", channel_id: 1])
Message.create([author_id: 2, body: "The gods have given us a gift for defeating the Greeks!", channel_id: 1])
Message.create([author_id: 4, body: "Please don't bring that thing inside...", channel_id: 1])
Message.create([author_id: 3, body: "Oh, hey there Hector", channel_id: 1])
Message.create([author_id: 4, body: "Hey Achilles", channel_id: 1])
Message.create([author_id: 4, body: "Oh...", channel_id: 1])