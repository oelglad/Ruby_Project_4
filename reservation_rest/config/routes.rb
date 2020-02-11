Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :reservations do
    resources :hotels
    end
  
  post 'auth/login', to: 'authentication#authenticate'
  # post'login', to:
    post 'signup', to: 'users#create'
    
   end
