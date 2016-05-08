class Food < ActiveRecord::Base
  has_many :wines, dependent: :destroy
  validates :name, presence: true
end
