class AddProductIdToVendors < ActiveRecord::Migration
  def change
    add_column :vendors, :product_id, :integer
  end
end
