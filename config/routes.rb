Rails.application.routes.draw do
  # devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
  devise_for :users
  #go to the welcome controller and the index action
  root 'welcome#index'

 
end
