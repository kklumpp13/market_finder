# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require_relative('farm_addy.rb')

data = $data.compact.map do |mkt|
  zip = mkt[:address][-5..-1]
  street = mkt[:address].split(/,|;/).first

  {
    name: mkt[:name],
    zip: zip,
    address: street
  }
end

pp data

p Market.create(data)