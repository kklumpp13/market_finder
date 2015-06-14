class Market < ActiveRecord::Base
  has_and_belongs_to_many :vendors
  validates_format_of \
    :zip,
    with: /\A\d{5}-\d{4}|\A\d{5}\z/,
    message: 'should be 12345 or 12345-1234',
    allow_blank: true

  validates_presence_of :name, :address, :zip

  geocoded_by :full_street_address
  after_validation :geocode

  def open?
  end

  def today?
  end

  def full_street_address
    p(self, zip)

    city_data = ZipCodes.identify(zip)
    if city_data
      city = city_data[:city]
      state = city_data[:state_code]
    end

    fsa = [address, city, state, zip].join(', ')
    p fsa; return fsa
  end
end
