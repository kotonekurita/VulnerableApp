Rails.application.routes.draw do
  
  root to: "customers#show"

  resources :customers
  get 'sign_up' => 'customers#new'

  get    'log_in'   => 'sessions#new'
  post   'log_in'   => 'sessions#create'

end
