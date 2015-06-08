json.array!(@vendors) do |vendor|
  json.extract! vendor, :id, :name, :description, :email, :website, :facebook, :phone, :twitter, :instagram
  json.url vendor_url(vendor, format: :json)
end
