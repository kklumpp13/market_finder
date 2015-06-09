require 'httparty'
require 'json'
require 'nokogiri'
require 'open-uri'
require 'pp'

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
  end[0..num_elements-1]

  # Scrape the name and address
  paragraphs.map do |para|
    name =
      para.css('bodyboldentrytitle')[0].text ||
      para.css('bodydimmedentry')[0].text

    address_link = para.children.select do |node|
      %r{google.com\/maps} =~ node['href']
    end[0]

    if address_link.respond_to?('text')
      {
        name: name,
        address: address_link.text
      }
    end
  end
end


# Compile all the data
pages.each do |page|
  $data += scrape_farmers_markets(page[:url], page[:count])
end

# Pretty print the data
p $data