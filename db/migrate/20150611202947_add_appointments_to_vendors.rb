class AddAppointmentsToVendors < ActiveRecord::Migration
  def change
    add_column :vendors, :date, :string
    add_column :vendors, :time, :string
  end
end
