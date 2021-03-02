Rails.application.routes.draw do

  root to: "customers#show"

  resources :customers
  get 'sign_up' => 'customers#new'

  resources :sessions, only: :destroy
  get    'log_in'   => 'sessions#new'
  post   'log_in'   => 'sessions#create'

end
