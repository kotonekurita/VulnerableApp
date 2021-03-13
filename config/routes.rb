Rails.application.routes.draw do

  root to: "customers#show"

  resources :customers
  get 'sign_up' , to: 'customers#new'

  resources :sessions, only: :destroy
  get    'log_in', to: 'sessions#new'
  post   'log_in', to: 'sessions#create'

end
