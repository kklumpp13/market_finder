Rails.application.routes.draw do

  resources :markets
  # resources :vendors
  get 'welcome/about'

  get 'welcome/vendor_landing'

  get 'welcome/customer_landing'

  get 'markets/search/:zip/:radius' => 'markets#search'
  get 'markets/search/:zip' => 'markets#search'


                 # vendors GET    /vendors(.:format)                     vendors#index
                 #  vendor GET    /vendors/:id(.:format)                 vendors#show


  # get "/:page" => "welcome#vendor_landing"
  # get "/:page" => "welcome#customer_landing"
  # get "/:page" => "welcome#about"


  # devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
  devise_for :users do 
    root 'vendors#index'

    get '/vendors/:id', to: 'vendors#show'#, as: 'patient'

             #      new_vendor GET    /vendors/new(.:format)                 vendors#new

             # edit_vendor GET    /vendors/:id/edit(.:format)            vendors#edit

             #             PATCH  /vendors/:id(.:format)                 vendors#update

             #             PUT    /vendors/:id(.:format)                 vendors#update

             #             DELETE /vendors/:id(.:format)                 vendors#destroy
             #             POST   /vendors(.:format)                     vendors#create

  end
  #go to the welcome controller and the index action

 # WelcomeController.action_methods.each do |action|
 #    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
 #  end
# unauthenticated :user do
  root 'welcome#index'
# end


end
