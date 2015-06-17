# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# require_relative('farm_addy.rb')

# data = $data.compact.map do |mkt|
#   if mkt[:address]
#     zip = mkt[:address][-5..-1]
#     street = mkt[:address].split(/,|;/).first
#   end

#   {
#     name: mkt[:name],
#     zip: zip,
#     address: street
#   }
# end

# pp data

# p Market.create(data)


 products = [{
             id: 1,
            name: "Artisan"
            },
            {
             id: 2,
              name: "Produce"
            },{
              id: 3,
              name: "Food & Drink"
              },{
             id: 4,
             name: "Health & Beauty"
                },{
             id: 5,
             name: "Services"
                  }]



# products.each do |product_params|
#   Product.find_or_create_by(product_params)
# end

# p " The products are:#{Product.all.inspect}"


vendors = [
  {
    name: "Krystal's Jewelry",
    description: "Liquorice macaroon pastry jelly sweet roll pastry....",
    email: "test@test.com",
    website: "www.test.com",
    facebook: "#",
    phone: "",
    twitter: "#",
    instagram: "",
    product_id: 1,
  },
  {

    name: "Green Beans & Co.",
    description: "Liquorice macaroon pastry jelly sweet roll pastry....",
    email: "test@test.com",
    website: "www.google.com",
    facebook: "",
    phone: "561-000-0000",
    twitter: "",
    instagram: "",
    product_id: 2,
  },
]

vendors.each do |vendor_params|
  Market.first.vendors.create(vendor_params)
end

# Name images for vendors vendor_1.jpg and put them in app/assets/images/vendors/

