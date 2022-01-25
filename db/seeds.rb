# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([username: "Demo User", email: "Demo@dischannel.com", password: "DemoProductPassword"])
User.create([username: "Priam", email: "testemail1@noweb.com", password: "Password1"])
User.create([username: "Achilles", email: "testemail2@noweb.com", password: "Password1"])
User.create([username: "Hector", email: "testemail3@noweb.com", password: "Password1"])
User.create([username: "Paris", email: "testemail4@noweb.com", password: "Password1"])
User.create([username: "Agamemnon", email: "testemail5@noweb.com", password: "Password1"])
User.create([username: "Heracles", email: "testemail6@noweb.com", password: "Password1"])
User.create([username: "Eurystheus", email: "testemail7@noweb.com", password: "Password1"])
User.create([username: "Hades", email: "testemail8@noweb.com", password: "Password1"])

Server.create([title: "Aegean Sea", creator_id: 1])
Server.create([title: "Heracles", creator_id: 1])
Server.create([title: "Gaming", creator_id: 1])

Membership.create([
  {user_id: 1, server_id: 1},
  {user_id: 2, server_id: 1},
  {user_id: 3, server_id: 1},
  {user_id: 4, server_id: 1},
  {user_id: 5, server_id: 1},
  {user_id: 6, server_id: 1}
  ])
Membership.create([
  {user_id: 1, server_id: 2},
  {user_id: 1, server_id: 3},
  {user_id: 7, server_id: 2},
  {user_id: 8, server_id: 2},
  {user_id: 9, server_id: 2},
  ])

Channel.create([title: "Troy", author_id: 1, server_id: 1])
Channel.create([title: "Greece", author_id: 1, server_id: 1])
Channel.create([title: "Myrmidons", author_id: 1, server_id: 1])
Channel.create([title: "13 Labours", author_id: 1, server_id: 2])
Channel.create([title: "Hades", author_id: 1, server_id: 2])
Channel.create([title: "Gamers", author_id: 1, server_id: 3])

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

Message.create([author_id: 7, body: "Can I have Cerberus?", channel_id: 5])
Message.create([author_id: 9, body: "Sure, just bring him back", channel_id: 5])
Message.create([author_id: 7, body: "Alright, here's Cerberus", channel_id: 4])
Message.create([author_id: 8, body: "WHAT ARE YOU DOING?!", channel_id: 4])
Message.create([author_id: 7, body: "You said you wanted me to catch Cerberus...", channel_id: 4])
Message.create([author_id: 8, body: "PUT IT BACK, PUT IT BACK", channel_id: 4])
Message.create([author_id: 7, body: "Ok", channel_id: 4])

Message.create([author_id: 1, body: "I should invite some friends", channel_id: 6])