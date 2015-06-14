class AddUserRefToVendors < ActiveRecord::Migration
  def change
    add_reference :vendors, :user, index: true, foreign_key: true
  end
end
