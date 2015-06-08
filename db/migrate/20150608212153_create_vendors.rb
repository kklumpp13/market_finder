class CreateVendors < ActiveRecord::Migration
  def change
    create_table :vendors do |t|
      t.string :name
      t.text :description
      t.string :email
      t.string :website
      t.string :facebook
      t.string :phone
      t.string :twitter
      t.string :instagram

      t.timestamps null: false
    end
  end
end
