class AddAttachmentThumbnailToVendors < ActiveRecord::Migration
  def self.up
    change_table :vendors do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :vendors, :thumbnail
  end
end
