# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require_relative('farm_addy.rb')

data = $data.compact.map do |mkt|
  if mkt[:address]
    zip = mkt[:address][-5..-1]
    street = mkt[:address].split(/,|;/).first
  end

  {
    name: mkt[:name],
    zip: zip,
    address: street
  }
end

pp data

p Market.create(data)


 Product.find_or_create_by(
                           id: 1,
                            name: "Artisan"
                          )

 Product.find_or_create_by(
                           id: 2,
                            name: "Produce"
                          )

 Product.find_or_create_by(
                           id: 3,
                            name: "Food & Drink"
                          )

 Product.find_or_create_by(
                           id: 4,
                            name: "Health & Beauty"
                          )

 Product.find_or_create_by(
                           id: 5,
                            name: "Services"
                          )

p " The products are:#{Product.all.inspect}"
