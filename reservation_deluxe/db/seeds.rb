# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create({name: 'admin', email: 'admin@admin.com', password: '123'})

hotels1 = Hotel.create!({hotel_name: 'NYC Hotel', city: 'NYC', state: 'NYC', zip_code: '00005', img_url: 'https://i.imgur.com/ZwOAp0R.jpg', created_by: 1})
hotels2 = Hotel.create({hotel_name: 'Marriott', city: 'Naples', state: 'FL', zip_code: '00008', img_url: 'https://i.imgur.com/zepCphz.jpg', created_by: 1})
hotels3 = Hotel.create({hotel_name: 'Aroma', city: 'East Rutherford', state: 'NJ', zip_code: '00009', img_url: 'https://i.imgur.com/Fpv3xwr.jpg', created_by: 1})
hotels4 = Hotel.create({hotel_name: 'Ramada', city: 'Linwood', state: 'NJ', zip_code: '00004', img_url: 'https://i.imgur.com/F74oUhk.jpg', created_by: 1})
hotels5 = Hotel.create({hotel_name: 'Hayatt', city: 'Brooklyn', state: 'NYC', zip_code: '00003', img_url: 'https://i.imgur.com/wLgvj3h.jpg', created_by: 1})
hotels6 = Hotel.create({hotel_name: 'Windsor', city: 'Queens', state: 'NYC', zip_code: '00002', img_url: 'https://i.imgur.com/tsI71Iv.jpg', created_by: 1})
hotels7 = Hotel.create({hotel_name: 'Roof Top', city: 'Mahwah', state: 'NJ', zip_code: '00001', img_url: 'https://i.imgur.com/sxTvthS.jpg', created_by: 1})
hotels8 = Hotel.create({hotel_name: 'Parice', city: 'Parice', state: 'Parice', zip_code: '00007', img_url: 'https://i.imgur.com/VYnLOnP.jpg', created_by: 1})
hotels9 = Hotel.create({hotel_name: 'Marriott2', city: 'Aswan', state:'Egypt' , zip_code: '00006', img_url: 'https://i.imgur.com/2CgGRoG.jpg', created_by: 1})

reservations1 = Reservation.create({reservation_desc: 'My New Reservation', room_type: 'Luxurious', guest_no: '4', start_date: '08-12-2021',end_date: '08-13-2021', hotel_id: 1 })
reservations2 = Reservation.create({reservation_desc: 'Hello World', room_type: 'Double', guest_no: '3', start_date: '08-12-2021',end_date: '08-13-2021', hotel_id: 1 })
reservations3 = Reservation.create({reservation_desc: 'Hotel Reservation', room_type: 'Single', guest_no: '6', start_date: '08-12-2021',end_date: '08-13-2021', hotel_id: 1 })
reservations4 = Reservation.create({reservation_desc: 'Test1', room_type: 'Double', guest_no: '5', start_date: '08-13-2021',end_date: '08-13-2021', hotel_id: 1 })
reservations5 = Reservation.create({reservation_desc: 'Help for Reservation', room_type: 'Test1', guest_no: '2', start_date: '08-13-2021',end_date: '08-13-2021', hotel_id: 1 })
# t.string :hotel_name
# t.string :city
# t.string :state
# t.integer :zip_code
# t.string :img_url
# t.string :created_by

# t.string :reservation_desc
# t.string :room_type
# t.integer :guest_no
# t.datetime :start_date
# t.datetime :end_date

# Create seed data, then run `heroku run rails db:seed`