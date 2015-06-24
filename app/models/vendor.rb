class Vendor < ActiveRecord::Base

  # This is a useless addition.

  belongs_to :product
  has_and_belongs_to_many :markets
  belongs_to :user
  acts_as_followable

  has_attached_file :thumbnail, :styles => { :large => "1000x1000#", :medium => "550x550#" }
                                # :storage => :s3,
                                # :s3_credentials => Proc.new{ |a| a.instance.s3_credentials }

  validates_attachment_content_type :thumbnail, :content_type => /\Aimage\/.*\Z/

  # def s3_credentials
  #   {:bucket => "mfinder", :access_key_id => ENV["AWS_ACCESS_KEY_ID"], :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]}
  # end

  extend FriendlyId
  friendly_id :name, use: :slugged

  def display_image
    thumbnail.url(:medium)
  end
end
