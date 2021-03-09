Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :artists, only: [:index, :show, :update] do
      resources :albums, only: [:show, :create] 
    end
    
    resources :albums, only: [:show] do
      resources :tracks, only: [:index, :create]
    end

    resources :tests, only: [:show]

    resources :tags, only: [:index]

    get '/search', to: 'search#search'
  end


end
