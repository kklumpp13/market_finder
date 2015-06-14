class CreateMarketsVendors < ActiveRecord::Migration
  def change
    create_table :markets_vendors do |t|
      t.integer :market_id
      t.integer :vendor_id
    end
  end
end
