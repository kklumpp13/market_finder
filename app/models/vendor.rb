class Vendor < ActiveRecord::Base
  belongs_to :product
  has_and_belongs_to_many :markets

  has_attached_file :thumbnail, :styles => { :large => "1000x1000#", :medium => "550x550#" }  
  validates_attachment_content_type :thumbnail, :content_type => /\Aimage\/.*\Z/

  extend FriendlyId
  friendly_id :name, use: :slugged

end
