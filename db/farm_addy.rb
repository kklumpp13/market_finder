require 'httparty'
require 'json'
require 'nokogiri'
require 'open-uri'
require 'pp'
require 'set'

pages = [
  {
    url: 'http://localfoodsouthflorida.org/produce-retail/sebastian-vero-beach-farmers-markets-farm-stores-produce-markets.html',
    count: 2
  },
  {
    url: 'http://localfoodsouthflorida.org/produce-retail/fort-pierce-port-st-lucie-farmers-markets-farm-stores-produce-markets.html',
    count: 3
  },
  {
    url: 'http://localfoodsouthflorida.org/produce-retail/stuart-farmers-markets-farm-stores-produce-markets.html',
    count: 3
  },

  {
    url: 'http://localfoodsouthflorida.org/produce-retail/boca-raton-west-palm-beach-farmers-markets-farm-stores-produce-markets.html',
    count: 16
  },

  {
    url: 'http://localfoodsouthflorida.org/produce-retail/fort-lauderdale-farmers-markets-farm-stores-produce-markets.html',
    count: 22
  },

  {
    url: 'http://localfoodsouthflorida.org/produce-retail/miami-farmers-markets-farm-stores-produce-markets.html',
    count: 28
  },

  {
    url: 'http://localfoodsouthflorida.org/produce-retail/florida-keys-farmers-markets-farm-stores-produce-markets.html',
    count: 4
  }

]

$data = []

def scrape_farmers_markets(url, num_elements)
  page = Nokogiri::HTML(open(url))

  # This is kind of ugly, but it's one of the few options to scrape the needed data.
  paragraphs = page.css('p').select do |para|
    para.children.first['class'] == 'EntryCityNames'
  end[0..num_elements - 1]

  # Scrape the name and address
  data = paragraphs.map do |para|

    text = para.text

    social_link_matches = para.css('a').select do |link|
      %w(Facebook Yelp).include?(link.text)
    end

    social_links = {}
    social_link_matches.each do |link|
      social_links[link.text] = link['href']
    end

    name =
      para.css('bodyboldentrytitle')[0].text ||
      para.css('bodydimmedentry')[0].text

    address_link = para.children.select do |node|
      %r{google.com\/maps} =~ node['href']
    end[0]

    addr = address_link.text if address_link.respond_to?('text')

    phone_match = /\d{3}\.\d{3}\.\d{4}/.match(text)
    phone = phone_match[0] if phone_match

    vendors_match = /(\d+) vendors/i.match(text)
    num_vendors = vendors_match[1] if vendors_match

    managers_match = /market managers?: (.+?)(?:(?:open)|(?:media))/i.match(text)
    managers = managers_match[1].strip if managers_match

    open_match = /Open (.+?)\./i.match(text)
    open = open_match[1] if open_match

    location_match = /Located (.+?)\./i.match(text)
    location = location_match[1] if location_match

    {
      name: name,
      address: addr,
      phone: phone,
      num_vendors: num_vendors,
      managers: managers,
      open: open,
      social_links: social_links,
      location: location
    }
  end
end


# Compile all the data
pages.each do |page|
  $data += scrape_farmers_markets(page[:url], page[:count])
end

# Pretty print the data
pp $data