Rails.application.routes.draw do

  get 'welcome/about'

  get 'welcome/vendor_landing'

  get 'welcome/customer_landing'

  get 'vendor_landings/index'

  # get "/:page" => "welcome#vendor_landing"
  # get "/:page" => "welcome#customer_landing"
  # get "/:page" => "welcome#about"


  # devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
  devise_for :users
  #go to the welcome controller and the index action

 # WelcomeController.action_methods.each do |action|
 #    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
 #  end
unauthenticated :user do
  root 'welcome#index'
end




end
