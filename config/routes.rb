Rails.application.routes.draw do

  root to: "customers#show"

  resources :customers, except: :update
  get 'sign_up' , to: 'customers#new'
  patch 'customers/edit', to: 'customers#update'

  resources :sessions, only: :destroy
  get    'log_in', to: 'sessions#new'
  post   'log_in', to: 'sessions#create'

end
